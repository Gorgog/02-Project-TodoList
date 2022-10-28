
//Модальное окно Countdown
// const showText = document.querySelector('.text h2');
// function textEnumeration(num) {
//    showText.textContent = num;
//    console.log(num);
//    if (num > 0) {
//       setTimeout(textEnumeration, 1000, --num);
//    }
// }

// setTimeout(textEnumeration, 1000, 3);

//Подсчет дня недели
let date = new Date();

function getWeekDay(date) {
   let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
   return days[date.getDay()];
}

document.querySelector('.day-week').textContent = getWeekDay(date);


//Создание, удаление, изменение задач

window.addEventListener('load', function () {

   const form = document.querySelector('#task-creation-block');
   const taskTitle = document.querySelector('#task-title');
   const taskText = document.querySelector('#task-text');
   const task = document.querySelector('#task');
   const buttonSubmit = document.querySelector('#submit');
   const buttonReset = document.querySelector('#reset');

   form.addEventListener('submit', function (e) {
      e.preventDefault();

      const taskInputTitle = taskTitle.value;
      const taskInputText = taskText.value;

      if (!taskInputTitle) {
         alert("Please name the task");
         return;
      }

      const task_el = document.createElement("div");
      task_el.classList.add('task-block__content');

      const task_checkbox = document.createElement("div");
      task_checkbox.classList.add('task-block__task-checkbox');

      const checkbox = document.createElement("img");
      checkbox.src = "img/icon/badge-check-after.png";
      checkbox.classList.add('checkbox', 'hide-content', 'show', 'active');

      const taskOutputBlock = document.createElement("div");
      taskOutputBlock.classList.add('task-block__task');

      const inputTitle = document.createElement("input");
      inputTitle.classList.add('input-title');
      inputTitle.type = "text";
      inputTitle.value = taskInputTitle;
      inputTitle.setAttribute("maxlength", "48");
      inputTitle.setAttribute("readonly", "readonly");

      const inputText = document.createElement("input");
      inputText.classList.add('input-text');
      inputText.type = "text";
      inputText.value = taskInputText;
      inputText.setAttribute("maxlength", "58");
      inputText.setAttribute("readonly", "readonly");

      const hrShadow = document.createElement("div");
      hrShadow.classList.add('task-block__hr-shadow');

      const taskpencil = document.createElement("img");
      taskpencil.classList.add('content__pencil', 'hide-content', 'show', 'active');
      taskpencil.src = "img/icon/pencil.png";

      const taskdots = document.createElement("img");
      taskdots.classList.add('content__menu-dots-vertical', 'hide-content', 'show');
      taskdots.src = "img/icon/cross.png";


      task_el.prepend(taskdots);
      task_el.prepend(taskpencil);
      taskOutputBlock.append(hrShadow);
      taskOutputBlock.prepend(inputText);
      taskOutputBlock.prepend(inputTitle);
      task_checkbox.append(taskOutputBlock);
      task_checkbox.prepend(checkbox);
      task_el.prepend(task_checkbox);
      task.append(task_el);


      //Изменение задачи
      taskpencil.addEventListener("click", function () {
         if (taskpencil.classList.contains('active')) {
            taskpencil.classList.remove('active');
            inputTitle.removeAttribute("readonly");
            inputTitle.focus();
            inputText.removeAttribute("readonly");
            taskpencil.src = "img/icon/check.png";
            inputTitle.style.textShadow = "0px 2px 4px rgb(0 0 0)";
            inputText.style.textShadow = "0px 2px 4px rgb(0 0 0)";
         } else {
            taskpencil.classList.add('active');
            inputTitle.setAttribute("readonly", "readonly");
            inputText.setAttribute("readonly", "readonly");
            taskpencil.src = "img/icon/pencil.png";
            inputTitle.style.textShadow = "0px 1px 1px #00000088";
            inputText.style.textShadow = "0px 1px 1px #00000088";
         }

         //Зачеркивание задач
      });

      //Удаление задачи
      taskdots.addEventListener("click", function () {
         task_el.remove();
      })

      checkbox.addEventListener('click', function () {
         if (checkbox.classList.contains('active')) {
            checkbox.classList.remove('active');
            checkbox.src = "img/icon/badge-check-befor.png";
            inputTitle.style.textDecoration = "line-through 2px rgba(0, 115, 255, 0.2)";
            inputText.style.textDecoration = "line-through 2px rgba(0, 115, 255, 0.2)";
         } else {
            checkbox.classList.add('active');
            checkbox.src = "img/icon/badge-check-after.png";
            inputTitle.style.textDecoration = "none";
            inputText.style.textDecoration = "none";
         }

      });

      dellhidens.addEventListener('click', function () {
         task_el.remove();
      });
   });

});

//показать элементы
const showElement = document.querySelector('#task');

showElement.addEventListener("mouseout", function () {
   const show = document.querySelectorAll('.show');
   show.forEach(element => {
      element.classList.add('hide-content');
   });
});

showElement.addEventListener("mouseover", function () {
   const show = document.querySelectorAll('.show');
   show.forEach(element => {
      element.classList.remove('hide-content');
   });
});

//удаление всех задачь
const dellAll = document.querySelector('.dellall');
const dellhidens = document.querySelector('.dellite-all');

dellAll.addEventListener('click', function () {
   dellhidens.classList.toggle('hidens');
});
