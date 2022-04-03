const filterByType = (type, ...values) => values.filter(value => typeof value === type), //перебор значений и поиск их типа
 
//функция скрывает все блоки ответов
	hideAllResponseBlocks = () => {
		const responseBlocksArray = Array.from(document.querySelectorAll('div.dialog__response-block')); //найден массив из блоков для ответа
		responseBlocksArray.forEach(block => block.style.display = 'none'); // перебор блоков в массиве и установка  на каждом display: none (скрыто)
	},

	// функция показывает блок с ответом исходя из значений аргументов (селектор (класс) блока, текст ответа, селектор(id) span-тега)
	showResponseBlock = (blockSelector, msgText, spanSelector) => { 
		hideAllResponseBlocks(); //вызов предыдущей функции
		document.querySelector(blockSelector).style.display = 'block'; //выбор блока в зависимости по аргументу blockSelector и  отображение его на экране
		if (spanSelector) {
			document.querySelector(spanSelector).textContent = msgText; //если id есть, то в этот span добавляется текст ответа
		}
	},

	showError = msgText => showResponseBlock('.dialog__response-block_error', msgText, '#error'), // функция вывода ошибки

	showResults = msgText => showResponseBlock('.dialog__response-block_ok', msgText, '#ok'), // функция вывода положительного ответа

	showNoResults = () => showResponseBlock('.dialog__response-block_no-results'), // // функция вывода отрицательного ответа (нет сообщения)

	// функция фильтрации введенных данных по типу и значению
		tryFilterByType = (type, values) => {
		try { //попытайся перебрать все значения и их типы и создать массив значений выбранного типа
			const valuesArray = eval(`filterByType('${type}', ${values})`).join(", ");
			const alertMsg = (valuesArray.length) ? //если у массива есть длина, то 
				`Данные с типом ${type}: ${valuesArray}` : // сообщение "Данные с типом ...: значение/я ""
				`Отсутствуют данные типа ${type}`; // или сообщние " Отсутствуют данные типа ..."
			showResults(alertMsg); //вывести одно из этих сообщений на экран
		} catch (e) { //лови ошибку
			showError(`Ошибка: ${e}`); // вывести сообщение об ошибке "Ошибка " 
		}
	};

const filterButton = document.querySelector('#filter-btn'); //кнопка Фильтровать


//обработчик по клику на кнопу Фильтровать
filterButton.addEventListener('click', e => {
	const typeInput = document.querySelector('#type'); //найти элемент по id = type
	const dataInput = document.querySelector('#data'); // //найти элемент по id = data

	if (dataInput.value === '') { //если значение элемента с id = data не заполнено, то
		dataInput.setCustomValidity('Поле не должно быть пустым!'); //вывод предупреждения 'Поле не должно быть пустым!'  
		showNoResults(); // вызов функции вывода отрицательного ответа (нет сообщения)
	} else { // иначе
		dataInput.setCustomValidity(''); //вывод пустого предупреждения ''  
		e.preventDefault(); //блокировка дефолтного выполнения обработчика  
		tryFilterByType(typeInput.value.trim(), dataInput.value.trim()); //вызов функции фильтрации введенных данных по типу и значению (обработанных trim-ом)
	}
});

