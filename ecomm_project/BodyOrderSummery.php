<pre>
<div id="body" >
	<fieldset>
	<legend> <font face="BedRock" color="MediumVioletRed" size="6">Detail Order Summary </legend>
	<table border="2" class="table table-striped table-bordered" align="center">
	<thead><tr><th width="13%"><font face="BedRock" color="DarkSlateGray">Product Name</th>
		<th width="10%"><font face="BedRock" color="DarkSlateGray">Price</th>
		<th width="15%"><font face="BedRock" color="DarkSlateGray">Image Name</th>
		<th width="35%" height="35%"><font face="BedRock" color="DarkSlateGray">Product</th>
		<th width="27%"><font face="BedRock" color="DarkSlateGray">Description </th>
		</tr>
	</thead>
<?php
include_once "Helper.php";
include_once "stringconvert.php";
$var=$_SESSION['user'];
$obj = new Helper("ecomm");
$field="user_id,mobile,address,city,zip";
$table="user_details";
$condition="user_id='".$var."'";
$record=$obj->read_record($field, $table, $condition);
$arra=[];
$price=0;
$arra=array(explode("&",str_replace('%2F','/',(str_replace('%2C',',',urldecode(html_entity_decode($_SESSION['key'])))))));
 // Its conversion of querystring data into Array Format

stringConvert1($arra,$price);
echo "</tr>";
?>
<tr>
		<td colspan="4"><h4 style="color:DarkRed;text-align:center">Total Price</h4></td>
		<td><h4 style="color:DarkRed;text-align:center"><?php  echo $price;?></h4></td>
		</tr>
</table>
<h3>Address Details :</h3>
<table border="3" BORDERCOLOR="#B8860B">
<tr>
<td>&nbsp;&nbsp;&nbsp;Email&nbsp;&nbsp;&nbsp;</td>
<td>&nbsp;&nbsp;&nbsp;<?php echo $_SESSION['email'];?>&nbsp;&nbsp;&nbsp;</td>
</tr>
<?php
foreach ($record as $key ) {
    $_SESSION["user_details_id"]= $key['user_id'];
    foreach ($key as $subElement=>$val) {
	?>
		<tr>
		<td>&nbsp;&nbsp;&nbsp;<?php echo "$subElement";?>&nbsp;&nbsp;&nbsp;</td>
        <td>&nbsp;&nbsp;&nbsp;<?php echo "$val";?>&nbsp;&nbsp;&nbsp;</td>
		</tr>
		<?php
    }
}
?>
</table>
<form method="POST" action="Validate.php">
<input type="submit" name="btn_submit" class="btn btn-info" value="Address" />&nbsp;<input type="submit" name="btn_submit"  class="btn btn-info" value="Confirm" />&nbsp;<input type="submit" name="btn_submit" class="btn btn-info"  value="Cancel" />
</form>
	</fieldset>
</div>
</pre>
