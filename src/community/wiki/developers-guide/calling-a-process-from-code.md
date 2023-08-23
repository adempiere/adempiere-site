---
title: Calling a Process from Code
category: Community
star: 9
sticky: 9
tag:
  - Wiki
  - Developer's Guide
article: false
---

Sometimes it might be convenient to call an Adempiere process from your code. This is how you do it:

~~~
// Create instance parameters. I e the parameters you want to send to the process.
ProcessInfoParameter pi1 = new ProcessInfoParameter("AD_Client_ID", clientId,"","","");
ProcessInfoParameter pi2 = new ProcessInfoParameter("AD_Org_ID", orgId, "","","");

// Create a process info instance. This is a composite class containing the parameters.
ProcessInfo pi = new ProcessInfo("", 0,0,0);
pi.setParameter(new ProcessInfoParameter[] {pi1, pi2, pi3});

// Lookup process in the AD, in this case by value
MProcess pr = new Query(Env.getCtx(), MProcess.Table_Name, "value=?", null)
                        .setParameters(new Object[]{"MyProcess"})
                        .first();
if (pr==null) {
      log.warn("Process " + pr.getName() + " does not exist. ");
      return false;
}

// Create an instance of the actual process class.
MyProcess process = new MyProcess();

// Create process instance (mainly for logging/sync purpose)
MPInstance mpi = new MPInstance(Env.getCtx(), 0, null);
mpi.setAD_Process_ID(pr.get_ID()); 
mpi.setRecord_ID(0);
mpi.save();

// Connect the process to the process instance.
pi.setAD_PInstance_ID(mpi.get_ID());

log.info("Starting process " + pr.getName());
boolean result = process.startProcess(ctx, pi, null);
~~~
