$(function(){
	$(".upload #files").change(function(){
		$(".file_list").addClass("file_show");
		var files = $(this)[0].files;
		var filecontent = "";
		for(var i=0;i<files.length;i++){
			filecontent=filecontent+'<div class="file-item"><span>'+files[i].name+'</span><p>'+getFileSize(files[i].size)+'</p></div>';
		}
		$(".file-content").html(filecontent);	
	});
	
	$(".file_start").click(function(){
		var formData = new FormData(document.getElementById("upfile"));
	    var fileCount = $(".upload #files")[0].files.length;
	    $(".file_progress_bg").css("display","block");
		$.ajax({
		   url:"index.php",
		   type:"post",
		   data: formData,
	       async: false,
	       cache: false,
	       contentType: false,
	       processData: false,
		   success:function(res){
		   	console.log(res);
		   	   if(res == 521){
		   	   	 $(".file_progress_bg").css("display","none");
		   	   	 $(".file_list").removeClass("file_show");
		   	   }
		   }
        });
		
	});
	
	
	
})

function getFileSize(fileByte) {
    var fileSizeByte = fileByte;
    var fileSizeMsg = "";
    if (fileSizeByte < 1048576) fileSizeMsg = (fileSizeByte / 1024).toFixed(2) + "KB";
    else if (fileSizeByte == 1048576) fileSizeMsg = "1MB";
    else if (fileSizeByte > 1048576 && fileSizeByte < 1073741824) fileSizeMsg = (fileSizeByte / (1024 * 1024)).toFixed(2) + "MB";
    else if (fileSizeByte > 1048576 && fileSizeByte == 1073741824) fileSizeMsg = "1GB";
    else if (fileSizeByte > 1073741824 && fileSizeByte < 1099511627776) fileSizeMsg = (fileSizeByte / (1024 * 1024 * 1024)).toFixed(2) + "GB";
    else fileSizeMsg = "文件超过1TB";
    return fileSizeMsg;
}
