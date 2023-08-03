---
title: Bug Triage
category: Community
star: 9
sticky: 9
tag:
  - Preface
  - Community
article: false
---

Here we document the meaning of the priority levels assigned to reported bugs.

## Where the bugs are

[JIRA - ADempiere's Issue Tracker](https://adempiere.atlassian.net/jira/dashboards/last-visited)

Legacy trackers:

[SourceForge Bug Tracker]()
[SourceForge UI Tracker](http://sourceforge.net/tracker/?atid=955896&group_id=176962&func=browse)

## Explanation of Bug Triage Process

Bug Triage is the process of reviewing a reported bug.

1. **Try to Reproduce:** You try to reproduce the bug on the latest release repository.
   - For example you can try to reproduce the bug on the test site <http://www.[testadempiere.com](testadempiere.com)/webui>.
   - As a result of your trial to reproduce one of these three things can happen:
    1. **Bug is unclear:**
    - You can find that redaction of the bug is not clear enough to allow research of the problem, in this case it's recommended that you:
       1. Change resolution to Invalid
       2. Add a comment asking for better explanation and steps to reproduce
       3. Change status to Pending

- Note that Pending status will change to Closed if the user doesn't add comments in 14 days (configurable in sourceforge) or somebody else change the status back to Open.
- When the user that opened the tracker add a comment the status is changed back to Open automatically.

     2. **Bug cannot be reproduced:**
  - When you find the bug is clearly explained but you cannot reproduce it in current release repository then it's recommended that you:

       1. Change resolution to Works for me
       2. Add a comment describing the steps you followed and stating that you could not reproduce the bug (possibly is an outdated bug, or reported for an old version)
       3. Change status to Pending
    3. **Bug is reproducible in release repository:**
       - You find the bug is valid, so it's recommended that you:
       1. Change resolution to None. Or change the resolution to Remind in case the tracker has a proposed patch or solution.
       2. Leave status in Open
       3. Try to assign proper category in case it's not assigned
       4. Add a comment like "reproduced by _name_of_triager_". It's also recommended to add steps to reproduce when the tracker doesn't have them.
       5. Assign **priority** according to the table described below
       6. Assign **group** according to the table described below

## Helping with Triage

1. Anyone can help. It is a matter of looking at bug reports, trying to reproduce in the daily build, then setting the priority of the bug.
2. Sign up to review a small section of bug reports, at the latest link underneath the heading Volunteering below.
3. Get the latest code/db.

    1. use the ready-to-run NX client at [testadempiere.com](testadempiere.com) (hosted by [Idalica](http://www.idalica.com/))
    2. or use the ready-to-run zkwebui client at [testadempiere.com](testadempiere.com) (hosted by [Idalica](http://www.idalica.com/))
    3. or download the daily adempiere binary from [testadempiere.com](testadempiere.com)
    4. or download and build the sources yourself, and apply all the latest migration scripts.
4. If you can reproduce the bug in the latest build, set the priorities as noted below.
5. If there is not enough information to reproduce, then you can ask for more details.
6. If you can not reproduce the error, then close the bug, and say 'Works in latest version'

## Priority Levels

f you are filling out a report, you can assign the priority according to the following guidelines:

- Blocker - Blocks development and/or testing work, production could not run.
- Critical - Crashes, loss of data, severe memory leak.
- Major - Major loss of function.
- Minor - Minor loss of function, or other problem where easy workaround is present.
- Trivial - Cosmetic problem like misspellings or misaligned text.
