// /** business logic */
// $(function(){

//     $("#col-md-4-1").click(function(){
//     $(".hidden1").slideToggle(1600)
//     $(".img1").slideToggle(1600)
//     });
    
//     $("#col-md-4-2").click(function(){
//     $(".hidden2").slideToggle(1600)
//     $(".img2").slideToggle(1600)
//     });
    
//     $("#col-md-4-3").click(function(){
//     $(".hidden3").slideToggle(1600)
//     $(".img3").slideToggle(1600)
//     });
    
//     $(".work4-image").hover(function(){
//     $("#work4-overlay").toggle()
//     $("#work4-img").toggle()
//     });
    
//     $(".work3-image").hover(function(){
//     $("#work3-overlay").toggle()
//     $("#work3-img").toggle()
//     });
    
//     $(".work2-image").hover(function(){
//     $("#work2-overlay").toggle()
//     $("#work2-img").toggle()
//     });
    
//     $(".work1-image").hover(function(){
//     $("#work1-overlay").toggle()
//     $("#work1-img").toggle()
//     });
    
//     $(".work5-image").hover(function(){
//     $("#work5-overlay").toggle()
//     $("#work5-img").toggle()
//     });
    
//     $(".work6-image").hover(function(){
//     $("#work6-overlay").toggle()
//     $("#work6-img").toggle()
//     });
    
//     $(".work7-image").hover(function(){
//     $("#work7-overlay").toggle()
//     $("#work7-img").toggle()
//     });
    
//     $(".work8-image").hover(function(){
//     $("#work8-overlay").toggle()
//     $("#work8-img").toggle()
//     });
    
    function myButton(){
            var userName = $("#name").value
            var userEmail = $("#email").value
            var userMessage = $("#message").value

            if ((userName == "") || (userEmail == "") || (userMessage == "")) {
                alert("please fill in the required data");
            }
            else {
                alert(userName + "We have received your message.Thank you for reaching out to us");
            }
        };

        $(document).ready(function(){
            $(".img1").click(function(){
                $(this).hide();
                $(".hidden1").show();
                });
                $(".hidden1").click(function(){
                    $(this).hide();
                    $(".img1").show();
                    });
            });
            $(document).ready(function(){
                $(".img2").click(function(){
                    $(this).hide();
                    $(".hidden2").show();
                    });
                    $(".hidden2").click(function(){
                        $(this).hide();
                        $(".img2").show();
                        });
                });
            $(document).ready(function(){
                $(".img3").click(function(){
                    $(this).hide();
                    $(".hidden3").show();
                    });
                    $(".hidden3").click(function(){
                        $(this).hide();
                        $(".img3").show();
                        });
                });


            
           
    