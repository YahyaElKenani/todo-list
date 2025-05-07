    let data = [];
    const addTask = () => { 
        const currentTask = document.getElementById("taskInput");
        const task = currentTask.value;
        if (task) {
            data.push({
                id: data.length,
                name: task,
                done: false
            });
            currentTask.value = "";
            renderTasks();
        }
    }

    const renderTasks = () => { 
        const ul = document.getElementById("taskList");
        ul.innerHTML = "";
        data.forEach((item, index) => { 
            if (item) { 
                const taskElement = document.createElement("li");
                taskElement.innerHTML = `<p>${item.name}</p>`;
                // Create toggle button
                const toggleBtn = document.createElement("button");
                toggleBtn.addEventListener("click", () => toggleTask(index));
                // Create delete button
                const deleteBtn = document.createElement("button");
                deleteBtn.innerHTML = '<i class="fa fa-trash"></i>'; 
                deleteBtn.addEventListener("click", () => deleteTask(index));
                if (item.done) { 
                    toggleBtn.innerHTML = '<i class="fa fa-check"></i>';
                    taskElement.style.color = 'green';
                }
                // Add buttons to task element
                taskElement.append(" ", toggleBtn, " ", deleteBtn);
                renderListBG();
                
                // Add task to list
                ul.appendChild(taskElement);
            }
        });
    }
    const renderListBG = () => { 
        const ul = document.getElementById("taskList");
        if (data.length > 0) {
            if (!ul.classList.contains("show-bg")) {
                ul.classList.add("show-bg");
            }
        } else { 
            ul.classList.remove("show-bg");
        }
    }
    // Toggle the done status
    const toggleTask = (index) => {
        data[index].done = !data[index].done;
        renderTasks();
    }
    // Delete a task
    const deleteTask = (index) => {
        data.splice(index, 1); // deletes the element that have the index from the data array
        renderTasks();
        renderListBG();
    }
    setInterval(() => {
        if (data.length > 0) {
            const allDone = data.every(item => item && item.done); // checks if data is not empty and all items are checked
            if (allDone) {
                console.log("All tasks done!");
            }
        }
    }, 10000);