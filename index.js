// window.onload = function(){
	var form = document.getElementById("form");	
	var input = document.getElementById("input");
	var btn = document.getElementById("btn");
	var list = document.getElementById("list");
	var id =1;
	var item;

	//button event listener
	btn.addEventListener("click", addTodoItem);

	//LIST EVENT LISTENER
	list.addEventListener("click", boxchecked);

	//remove item from list
	list.addEventListener("click", removeitem);

	//add todo item to the list
	function addTodoItem(event) 
	{
		event.preventDefault();
		if(input.value === "")
		{
			alert("You must enter some value");
		}
		else
		{
			if(list.style.borderTop === "")
			{
				list.style.borderTop = "2px solid white";
				item = `<li id="li-${id}">${input.value}
				<input id="box-${id}" class="checkboxes" type="checkbox">
				<button id="btn-${id}" type="submit" class="dlt"><i class="fa fa-trash fa-1x " style="color:red"></i></button>
				</li>`;
				list.innerHTML = list.innerHTML +  item;
				id++;
				form.reset();
			}
		}
	}

	//add event to list
	function boxchecked(event)
	{
		const element = event.target;
		if(element.type==="checkbox")
		{
			if(element.checked== true)
			{
				element.parentNode.style.textDecoration = "line-through";
			}
			else
			{
				element.parentNode.style.textDecoration = "none";
			}
		}
	}

	function removeitem(event)
	{
		const element = event.target;
		console.log(element);
		if(element.type==="button")
		{
			if (confirm("Are you sure to delete the task?"))
			{
				element.parentNode.style.display = "none";
			}
			else{}
		}
	}
// }
