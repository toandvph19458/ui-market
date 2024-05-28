const navbar_download = document.getElementById('navbar_download_product');


window.addEventListener('scroll', function () {

    if (window.scrollY > 340) {
        navbar_download.style.display="block";
    
    } else {
        navbar_download.style.display="none";
      
    }
});

let iconGroup = document.querySelectorAll('.icon_heart_group');

iconGroup.forEach(item => {
	let pinkIcon = item.querySelector('.icon_heart_pink');

	item.onclick = () => {
		if(pinkIcon.classList.contains('d-none')){
			pinkIcon.classList.remove('d-none');
			pinkIcon.classList.add('d-block');
		} else{
			pinkIcon.classList.remove('d-block');
			pinkIcon.classList.add('d-none');
		}
	}
})

function validateEmail(field) {
	let email = field.value;
	var isError = false;
	if (!email) {
		isError = true;
	}
	if (email == '') {
		isError = true;
	}
    var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!reg.test(email)) {
		isError = true;
    }

    if (isError) {
    	field.style.border = '1px solid #e78282';
		setTimeout(function(){
			field.style.border = '1px solid #E4E6EF';
		}, 5000);
		return false;
    }
    return true;
}

function validateEmpty(field) {
	let value = field.value;
	var isError = false;
	if (!value) {
		isError = true;
	}
	if (value == '') {
		isError = true;
	}
    if (isError) {
    	field.style.border = '1px solid #e78282';
		setTimeout(function(){
			field.style.border = '1px solid #E4E6EF';
		}, 5000);
		return false;
    }
    return true;
}

function validateSameValue(field1, field2) {
	let value1 = field1.value;
	let value2 = field2.value;

	var isError = false;

	if (!validateEmpty(field1) || !validateEmpty(field2)) {
		isError = true;
	}

	if (value1 != value2) {
		isError = true;
	}

    if (isError) {
    	field1.style.border = '1px solid #e78282';
    	field2.style.border = '1px solid #e78282';
		setTimeout(function(){
			field1.style.border = '1px solid #E4E6EF';
			field2.style.border = '1px solid #E4E6EF';
		}, 5000);
		return false;
    }
    return true;
}