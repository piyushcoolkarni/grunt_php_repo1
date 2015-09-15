<pre>
<link rel="stylesheet" type="text/css" href="css/bodyCss.css">
<div id="body">
<h1 style="color:MediumVioletRed;text-align:center"><font face="BedRock">Your Cart</h1>
<table class="table table-striped table-bordered" border="3">
	<thead>
		<tr>
			<th width="13%"><font face="BedRock" color="DarkSlateGray">Product Name</th>
			<th width="10%"><font face="BedRock" color="DarkSlateGray">Price</th>
			<th width="15%"><font face="BedRock" color="DarkSlateGray">Image Name</th>
			<th width="35"><font face="BedRock" color="DarkSlateGray">Image</th>
			<th width="27%"><font face="BedRock" color="DarkSlateGray">Description </th>
		</tr>
	</thead>
<?php
	include_once "stringconvert.php";
	$var=$_SERVER['QUERY_STRING'];
	$_SESSION['key']=$var;
	$price=0;
	$arra=[];
	$arra=array(explode("&",str_replace('%2F','/',(str_replace('%2C',',',urldecode(html_entity_decode($_SESSION['key'])))))));
	 // Its conversion of querystring data into Array Format
	
	
	stringConvert1($arra,$price);
echo "</tr>";

?>
		<tr>
		<td colspan="4"><h4 style="color:Maroon;text-align:center ">Total Price</h4></td>
		<td><h4 style="color:Maroon;text-align:center"><?php  echo $price;?></h4></td>
		</tr>
</table>
<form action="Summary.php" method="POST">
<input type="submit" class="btn btn-info" value="Confirm Order"/>&nbsp;<input type="button" value="Cancel"
class="btn btn-info" id="cancel_addtoCart"/>
</form>
</div>
</pre>
