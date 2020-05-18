$(function(){
	//$(".mytaobao").mousemove(function(){
	//	$(this).next().attr("style","display : none");
	//})

	$(".mytaobao").mouseenter(function(){
		$(this).next().show();//attr("style","display : block");
	})
	$(".remove").mouseleave(function(){
		$(this).hide();//attr("style","display : block");
	})
	$(".sale").mouseenter(function(){
		$(this).next().show();//attr("style","display : block");
	})
	$(".hide").mouseleave(function(){
		$(this).hide();//attr("style","display : block");
	})
	
    $(".checkall").change(function(){
    	$(".j-checkbox,.checkall").prop("checked",$(this).prop("checked"));
        if($(this).prop("checked")){
            $("#goodsDetail").addClass("goodsDetail-checked");
        }else{
            $("#goodsDetail").removeClass("goodsDetail-checked");
        }
    })	
    $(".j-checkbox").change(function(){
    	if($(".j-checkbox:checked").length === $(".j-checkbox").length){
    		$(".checkall").prop("checked",true);
    	}else{
    		$(".checkall").prop("checked",false);
    	}
        if($(this).prop("checked")){
            $(this).parents("#goodsDetail").addClass("goodsDetail-checked");
        }else{
            $(this).parents("#goodsDetail").removeClass("goodsDetail-checked");
        }
    })	

    $(".jia").click(function(){
    	var n = $(this).siblings(".itext").val();
    	n++;
    	$(this).siblings(".itext").val(n);
    	var p = $(this).parent().siblings().children(".active").html();
    	p = p.substr(1);
    	var price = (p*n).toFixed(2);
    	$(this).parent().siblings().children(".totalPrice").html("￥" + price);
    	getSum();
    })
    $(".jian").click(function(){
    	var n = $(this).siblings(".itext").val();
    	if(n == 1){
    		return false;
    	}
    	n--;
    	$(this).siblings(".itext").val(n);
    	var p = $(this).parent().siblings().children(".active").html();
    	p = p.substr(1);
    	var price = (p*n).toFixed(2);
    	$(this).parent().siblings().children(".totalPrice").html("￥" + price);
    	getSum();
    })

    $(".itext").change(function(){
    	var n = $(this).val();
    	var p = $(this).parent().siblings().children(".active").html();
    	p = p.substr(1);
    	var price = (p*n).toFixed(2);
    	$(this).parent().siblings().children(".totalPrice").html("￥" + price);
    	getSum();
    })

    getSum();

    function getSum(){
    	var count = 0;
    	var money = 0;
    	$(".itext").each(function(i,ele){
    		count += parseInt($(ele).val());
    	});
    	$(".countC").text(count);
    	$(".totalPrice").each(function(i,ele){
    		money += parseInt($(ele).text().substr(1));
    		$(".money").text(money.toFixed(2));
    	});
    }

    $(".delate a").click(function(){
        $(this).parents("#goodsDetail").remove();
        $("#storeName").remove();
        getSum();
    });
    $(".bottomDelate").click(function(){
        $(".j-checkbox:checked").parents("#goodsDetail").remove();
        $("#storeName").remove();
        getSum();
    });




})