document.querySelector('button').addEventListener("click", myClick);

function myClick() {
    var address = document.getElementById("address");
    var name = document.getElementById("name");
    var a = address.value;
    var b = name.value;
    $.ajax ( {
        type: 'POST',
        url: 'save_submit.php',
        data: { a: a, b: b },
        success: function(response) {
            console.log('Змінні були збережені до файлу.');
        },
        error: function(xhr, status, error) {
            console.log('Сталася помилка при збереженні змінних: ' + error);
        }
    });
}


