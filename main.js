var white = true;

$("ul").on('click', 'li', function(){
    $(this).toggleClass("completed");
});

$("input[type='text']").keypress(function(e){
    if($(this).val() === "") {
        $(this).attr("placeholder", "Enter your task");
    }
    else if(e.which === 13 ) {
        var todoText = $(this).val();
        $(this).val("");
        if(white) {
            $("ul").append("<li class='ghost-list'>" + todoText + "<span> <i class='fa fa-hand-rock-o' aria-hidden='true'></i> </span>" + ' ' + "</li>");
        }
        else {
            $("ul").append("<li class='ghost-list ghost-list-dark'>" + todoText + "<span> <i class='fa fa-hand-rock-o' aria-hidden='true'></i> </span>" + ' ' + "</li>");
        }
    } 
});

$('button').on('click', function() {
    if($("input[type='text']").val() === "") {
        $("input[type='text']").attr("placeholder", "Enter your task");
    }
    else {
        var todoText = $("input[type='text']").val();
        $("input[type='text']").val("");
        if(white) {
            $("ul").append("<li class='ghost-list'>" + todoText + "<span> <i class='fa fa-hand-rock-o' aria-hidden='true'></i> </span>" + ' ' + "</li>");
        }
        else {
            $("ul").append("<li class='ghost-list ghost-list-dark'>" + todoText + "<span> <i class='fa fa-hand-rock-o' aria-hidden='true'></i> </span>" + ' ' + "</li>");
        }
    }
});   

$("ul").on('click', 'span', function(e){
    e.stopPropagation();
    $(this).parent().fadeOut(300,function(){
        $(this).remove();
    });
});



$(".toggle").click(function(){
    $("input[type='text']").toggleClass("ghost-input-dark");
    $("button").toggleClass("ghost-button-dark");
    $("li").toggleClass("ghost-list-dark");
    $("h1").toggleClass("darkh1");
    if(white) { 
        $("p").css('color', 'white');
        $("body").css("background-color","#212121");
        white = !white;
    }
    else {
        $("p").css('color', 'black');
        $("body").css("background-color","white");
        white= !white;
    }
});

