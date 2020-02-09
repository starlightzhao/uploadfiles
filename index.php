<?php
	//文件类型没有限制
	if(isset($_FILES["files"])){
			$error =$_FILES["files"]["error"];
			$fileCount = count($_FILES["files"]["name"]);
			for($i=0; $i < $fileCount; $i++)
			{
				$fileName = $_FILES["files"]["name"][$i];
				move_uploaded_file($_FILES["files"]["tmp_name"][$i],'upfiles/'.$fileName);
				//注意上传的数量不能多余php配置中的数量，一般是20
			}
	        echo 521;
    }
	
?>