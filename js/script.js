$(function(){
    $("#phone").mask("+38(000) 000-0000");
    $("#applyForm").submit(function(e){
        e.preventDefault();
        var course = $("#applyForm").data("course");
        var studentName = $("#name").val();
        var phone = $("#phone").val();
        var email = $("#email").val();

        Email.send("circle.if.form@gmail.com",
            "circle.web.if@gmail.com",
            "New Student for "+course,
            studentName+" registered for "+course+"<br />Phone: "+phone+" email: "+email,
            {token: "c2aed71d-c7a8-499b-81b0-123bfb784de6"}
        );
        $("#thanks").addClass("show-my");
        $("#modal").removeClass("show-my");
    });
    $(".showModal").click(function(e){
        $("#applyForm").data("course",$(this).attr('id'));
        $("#modal").addClass("show-my");
    });
    $("#closeModal").click(function(e){
        $("#modal").removeClass("show-my");
    });
    $("#closeThanks").click(function(e){
        $("#thanks").removeClass("show-my");
    })
});
