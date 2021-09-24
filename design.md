# CS 124 Lab 1
Devika Mehr and William La

CS124 Section 1

[Link to index page](https://github.com/devikamehr/cs124/blob/lab1/index.html)

Sept. 23 2021

Design Decisions and Rationale
------------------------------
Our biggest design choice was to ensure our header remained the same on each screen. We agreed on this as we believed this would give a cohesive look and not add “too much” to the changing screens. 
Similarly, we wanted to ensure our black button on the bottom remained in the same position in every screen. But, the icon would change from a plus button to a delete button for different tasks. This would ensure familiarity of where the action button would be, but would also visually change for each command. 
We also ensured we had the same color scheme for every task and just lightened the task boxes from the background to make sure the overall look was light and easy on the eyes to read. 
Also, for our Filter feature, we wanted to ensure the user knew which “screen” they were on, so we decided to bolden the text to visually alert the user they were looking at either the “completed” or “uncompleted” screen.
Finally, we ensured we had down arrows for any dropdown menu and a tappable filter button as well. We wanted a few interactive features to minimize how complicated the application could get, but also provide more functionality. 

#### Concept Designs for First Few Tasks
![Concept Designs](./img/brainstorm.jpg)

Alternative Designs Considered
------------------------------
For the dropdown menu functionality where we can choose to edit or delete an individual item, we initially had two designs. 
The first design had the dropdown icon rotate and shift to the left while the two menu options appear next to it after the icon was clicked.
The second design features a menu that drops down after the icon was clicked featuring the two menu options. We ultimately decided to go with this second design as it was simpler and more accurately displayed the functionality expected from a dropdown icon.

#### Dropdown alternative design
![Dropdown Designs](./img/dropdown.jpg)

We also considered adding a "select all" box similar to the one commonly used in mail applications like Gmail. 

#### Select All Box Gmail Example
![Select All Box](./img/gmailselect.jpg)

We initially thought that this select all feature could help users select a screen of tasks (i.e. all completed tasks) and easily delete them. However, we then thought about the 80-20 rule and determined that this feature may detract from the simplicity of our app. The conclusion we reached was that users would likely only delete all of the tasks on their screen when they were looking at all of the completed tasks. Otherwise, users would likely delete individual tasks using the dropdown menu for each task. So, we decided against adding this select all box and instead modified our button in the lower right of the screen to be a delete all button only when users show all completed tasks.

#### Select All Box Concept Design
![Select All Box](./img/selectall.jpg)


User Testing
------------
For user testing, we conducted two tests with two different users. One user was an avid to-do list user while another user didn’t use them quite often. While they went through the screens, they enjoyed the colors and were able to speak out about their actions easily. One point the avid to-do list user mentioned was our broken heart emoji on the “empty tasks” screen sparked a bit of anxiety that she had no tasks to complete and it confused her on why it was sad. While going through the dropdown boxes, one user was confused at first with the “Edit” and “Delete” options but once they saw the next screen they realized that you could edit and delete the tasks. Overall, both of them enjoyed the colors and felt it was simple enough to use, and were eager to see how we’d improve it. 

### Updating the empty task screen based on user feedback
Before

![Task 1 Start](./img/task1startbefore.jpg)

After

![Task 1 Start](./img/task1startafter.jpg)

Final Design
------------
### Task 1 - In an empty list, create an item named "Buy new John Grisham book"
Users are presented with an empty list and are able to press the plus button in the lower right of the screen to begin creating a new todo task. When users press the button, they are taken to a new task creation screen where they can enter a task title and submit their task by pressing the check button in the lower right. Once they submit their task, it is viewable on the main todo page.

Start

![Task 1 Start](./img/task1startafter.jpg)

Middle

![Task 1 Middle](./img/task1mid.jpg)

End

![Task 1 End](./img/task1end.jpg)

### Task 2 - In a non-empty list, create an item named "Eat Lunch"
Task 2 is very similar to task 1; however, users start with a non-empty list. Users can press the plus button to create and submit a task. This task appears under the task that was previously there. 

Start

![Task 2 Start](./img/task1end.jpg)

Middle

![Task 2 Middle](./img/task1mid.jpg)

End

![Task 2 End](./img/task2end.jpg)

### Task 3 - Mark the item named "Call Mom" completed
Users start with a list of tasks including the "Call Mom" task. They are able to click the empty checkbox next to the task title to complete the task, which visually strikes through the title and adds a check to the checkbox. 

Start

![Task 3 Start](./img/task3start.jpg)

End

![Task 3 End](./img/task3end.jpg)

### Task 4 - Rename the item "Text John" to "Text John about bank statements"
Starting with a list including the "Text John" task, users can press the dropdown arrow icon to the right of the task title. Pressing this opens up a menu with two options: "Edit Item" and "Delete Item". When users press the "Edit Item" option, they are taken to a new page where they can edit the task that pre-exists in the text field. Once they edit the task title, they can press the submit button and the item will be updated on the main todo screen. 

Start

![Task 4 Start](./img/task4start.jpg)

Middle 1

![Task 4 Middle 1](./img/task4mid.jpg)

Middle 2

![Task 4 Middle 2](./img/task4mid2.jpg)

End

![Task 4 End](./img/task4end.jpg)

### Task 5 - Show only uncompleted items
Starting with the todo main page, users can press the filter icon on the top right of the screen to open up a filter menu. This filter menu has "Uncompleted" and "Completed" as options. Pressing "Uncompleted" updates the main todo page to not include the completed tasks. The "Uncompleted" option becomes bolded to remind the user that they are looking at that subset of tasks.

Start

![Task 5 Start](./img/task5start.jpg)

Middle

![Task 5 Middle](./img/task5mid.jpg)

End

![Task 5 End](./img/task5end.jpg)

### Task 6 - Delete all completed items
Similar to task 5, users can press the filter icon to open up the filter menu. Pressing "Completed" hides all of the uncompleted tasks as well as changes the functionality of the button on the lower right (Note: this means users can not create tasks while only showing completed tasks, which we determined as okay due to the 80/20 rule). The button becomes a delete all button which deletes all of the tasks on screen. The "Completed" option on the filter menu also becomes bolded to remind the user that they are looking at a subset of tasks. 

Start

![Task 6 Start](./img/task6start.jpg)

Middle 1

![Task 6 Middle 1](./img/task6mid.jpg)

Middle 2

![Task 6 Middle 2](./img/task6mid2.jpg)

End

![Task 6 End](./img/task6end.jpg)

Challenges
----------
While creating our tasks, we faced a few challenges towards the end of each task. When we would add on a new feature or edit the way our task looked like, we would often forget to add the new ids and classes to our original starter and middle files. This would often be caught towards the end of the process, when we had completely forgotten what we had edited. While we were able to fix this with inspect element, it was still a challenge to figure out what had to be edited and fixed to re-adjust and create a more cohesive look. 

Parts of the Design We're Most Proud of
---------------------------------------
We’re most proud of our color choice and mainly being able to implement every idea we had. When we first started, we didn’t know if we would be able to implement each and every item and figured that we could adapt our design to something simpler. But, as we were able to use the skills learned from class, we were able to mainly attempt every idea we had. One thing we’re most proud of is using Google’s icons and incorporating that into our look.