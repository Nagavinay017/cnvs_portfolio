

const name=document.getElementById('name');
const email=document.getElementById('email');
const subject=document.getElementById('subject');
const message=document.getElementById('message');
const uid = uuidv4();

const database=firebase.database();

    function validate(){
            database.ref('/message from : ' + uid ).set({
                name:name.value,
                email:email.value,
                subject:subject.value,
                message:message.value
            });
            $('.alert').removeClass("d-none");
            setTimeout(function(){
                window.location.reload(1);
            },3000);
            return false;     
    }
    
    

    // const showComment=function() {

    //     db.collection('Comments').get().then(data => {
    //         // console.log(data);
    //         let divElement = $('<div>');
    //         // $('.todo').empty();
    //         data.docs.forEach(element => {
    //             const ele = element.data();
    //             divElement.append('<p>'+  ele.comment + '</p>');
    //             divElement.append('<p class="float-right">'+"-" + ele.name + '</p>'+'<br>');
    
    //         });
    //         $('.todo').append(divElement);
    //     });
    // }





