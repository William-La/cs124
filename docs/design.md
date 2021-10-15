# CS 124 Lab 2
Devika Mehr and William La

CS124 Section 1

[Link to index page](https://github.com/devikamehr/cs124/blob/lab1/index.html)

Oct. 14th 2021

Design Decisions and Rationale
------------------------------
For this lab, we decided to follow through with most of the design choices we made in lab 1. This is because we enjoyed our design and also believed it would be good practice to learn how to link everything with React. It was also convenient to pull from our existing CSS file. 
A design decision that differed from our first lab was the flow of our task filter action. We previously had a filter icon that displayed a menu when it was clicked. The menu would stay on the screen to display the state of the filter.

[insert old filter image here]

One of our user testers mentioned that it was hard to understand what the icon was and, after a bit of deliberation, we agreed that our lab 1 approach was clunky and unintuitive. Instead, we decided on a simple dropdown menu. We believe that a dropdown menu is a great approach because it is intuitive and displays the state of the filter without taking up additional space. 

[insert new filter dropdown image here, possibly multiple screenshots with the menu and such]

We also wanted to keep the visual cue that when you “check off a task” the task text also gets crossed off. Also, when you edit a pre-existing task, the placeholder text in our modal is the current task’s text. 

[OLD]

Our biggest design choice was to ensure our header remained the same on each screen. We agreed on this as we believed this would give a cohesive look and not add “too much” to the changing screens. 
Similarly, we wanted to ensure our black button on the bottom remained in the same position in every screen. But, the icon would change from a plus button to a delete button for different tasks. This would ensure familiarity of where the action button would be, but would also visually change for each command. 
We also ensured we had the same color scheme for every task and just lightened the task boxes from the background to make sure the overall look was light and easy on the eyes to read. 
Also, for our Filter feature, we wanted to ensure the user knew which “screen” they were on, so we decided to bolden the text to visually alert the user they were looking at either the “completed” or “uncompleted” screen.
Finally, we ensured we had down arrows for any dropdown menu and a tappable filter button as well. We wanted a few interactive features to minimize how complicated the application could get, but also provide more functionality. 

#### Concept Designs for First Few Tasks
![Concept Designs](./img/brainstorm.jpg)

Alternative Designs Considered
------------------------------
We did think about using our old design with a “Filter Icon” and text that congratulated the user if they did not have any tasks to complete. But, after the second phase of user testing, we were told that the text could be seen as encouraging users to “speed” through tasks to get to the kind message. Therefore, we decided that having a message displayed when there were no tasks displayed was not a good idea due to the constant feedback from our user testers. We also decided to create a dropdown menu as that was more obvious than what the filter did. 

[OLD]

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
We had one user go through the application and she gave great feedback on two key parts. She mentioned that removing the text was a good idea as it can create feelings to “rush” through tasks to receive a message. When we told her that we used to have a message that said “Oh no! No more tasks to do” she mentioned that any text could make a user more anxious about their productivity. Therefore, we decided to remove the text altogether. Then, she mentioned that the filter icon was a bit confusing and did not look like something she would obviously tap at first glance. When I mentioned we were thinking about using a dropdown, she agreed that a dropdown is more obvious to a user than there are options hidden below. 
[OLD]

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

Middle - After the plus button is pressed

![Task 1 Middle](./img/task1mid.jpg)

End - After the submit button is pressed

![Task 1 End](./img/task1end.jpg)

### Task 2 - In a non-empty list, create an item named "Eat Lunch"
Task 2 is very similar to task 1; however, users start with a non-empty list. Users can press the plus button to create and submit a task. This task appears under the task that was previously there. 

Start

![Task 2 Start](./img/task1end.jpg)

Middle - After the plus button is pressed

![Task 2 Middle](./img/task1mid.jpg)

End - After the submit button is pressed

![Task 2 End](./img/task2end.jpg)

### Task 3 - Mark the item named "Call Mom" completed
Users start with a list of tasks including the "Call Mom" task. They are able to click the empty checkbox next to the task title to complete the task, which visually strikes through the title and adds a check to the checkbox. 

Start

![Task 3 Start](./img/task3start.jpg)

End - After the "Call Mom" checkbox is pressed

![Task 3 End](./img/task3end.jpg)

### Task 4 - Rename the item "Text John" to "Text John about bank statements"
Starting with a list including the "Text John" task, users can press the dropdown arrow icon to the right of the task title. Pressing this opens up a menu with two options: "Edit Item" and "Delete Item". When users press the "Edit Item" option, they are taken to a new page where they can edit the task title that pre-exists in the text field. Once they edit the task title, they can press the submit button and the item will be updated on the main todo screen. 

Start

![Task 4 Start](./img/task4start.jpg)

Middle 1 - After the dropdown icon is pressed

![Task 4 Middle 1](./img/task4mid.jpg)

Middle 2 - After the edit item option is pressed

![Task 4 Middle 2](./img/task4mid2.jpg)

End - After the submit button is pressed

![Task 4 End](./img/task4end.jpg)

### Task 5 - Show only uncompleted items
Starting with the todo main page, users can press the filter icon on the top right of the screen to open up a filter menu. This filter menu has "Uncompleted" and "Completed" as options. Pressing "Uncompleted" updates the main todo page to not include the completed tasks. The "Uncompleted" option becomes bolded to remind the user that they are looking at that subset of tasks.

Start

![Task 5 Start](./img/task5start.jpg)

Middle - After the filter button is pressed

![Task 5 Middle](./img/task5mid.jpg)

End - After the "Uncompleted" option is pressed

![Task 5 End](./img/task5end.jpg)

### Task 6 - Delete all completed items
Similar to task 5, users can press the filter icon to open up the filter menu. Pressing "Completed" hides all of the uncompleted tasks as well as changes the functionality of the button on the lower right (Note: this means users can not create tasks while only showing completed tasks, which we determined as okay due to the 80/20 rule). The button becomes a delete all button which deletes all of the tasks on screen. The "Completed" option on the filter menu also becomes bolded to remind the user that they are looking at a subset of tasks. Once users press the delete all button, the completed tasks on screen are removed and users are brought back to the main todo page.

Start

![Task 6 Start](./img/task6start.jpg)

Middle 1 - After the filter button is pressed

![Task 6 Middle 1](./img/task6mid.jpg)

Middle 2 - After the "Completed" option is pressed

![Task 6 Middle 2](./img/task6mid2.jpg)

End - After the delete all button is pressed

![Task 6 End](./img/task6end.jpg)

Challenges
----------
One challenge we faced was definitely debugging react. While in other languages you can get exact error messages with syntactical rules, in React, sometimes the error messages are so unique to your project that the internet has no help. But, this required us to be resourceful with debugging and also trying to step through our code logically. 

Another challenge we faced was figuring out the MaterialUI CSS versus our CSS as well. We picked a library that one of the partners felt extremely confident in using as they have had lots of experience with the library before. But, when we imported most of the modules into our project, we realized that the way MaterialUI styles their components were different from our .css files in our project. We were able to resolve this issue by using google inspect element in-line styles and learning more about useStyles() and JSS in React. While sometimes it was extremely easy to figure out which MaterialUI class we had to manipulate, sometimes, it could be incredibly frustrating indexing through different classes and trying to manipulate the component. But, as time went on, we were able to find a pattern and design our app just the way we liked. 

[OLD]

While creating our tasks, we faced a few challenges towards the end of each task. When we would add on a new feature or edit the way our task looked like, we would often forget to add the new ids and classes to our original starter and middle files. This would often be caught towards the end of the process, when we had completely forgotten what we had edited. While we were able to fix this with inspect element, it was still a challenge to figure out what had to be edited and fixed to re-adjust and create a more cohesive look. 

Parts of the Design We're Most Proud of
---------------------------------------
One task that seemed incredibly daunting was our “filter” task which had to check the status of a task and only display the user-selected filter on the screen. At first, we suspected that this would take quite a large portion of our time together so we decided to leave it off till the end. But, after reading up on useEffect() and looking into the switch keyword, we realized that we could definitely understand how to start this issue and how to connect the pieces together. When we were able to get our filter to work, we felt incredibly proud and also more confident in our debugging skills too.  

Finally, we’re extremely proud of everything we made! It seemed daunting at first to make a WHOLE application in React, but, after many hours of debugging, celebration, and google searching we are so proud of it and think it can definitely evolve to something even better too! 

[OLD]

We’re most proud of our color choice and mainly being able to implement every idea we had. When we first started, we didn’t know if we would be able to implement each and every item and figured that we could adapt our design to something simpler. But, as we were able to use the skills learned from class, we were able to mainly attempt every idea we had. One thing we’re most proud of is using Google’s icons and incorporating that into our look.
