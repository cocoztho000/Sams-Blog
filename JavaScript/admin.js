$(document).ready(function()
{
	$('#new_blog_modal').on('shown.bs.modal', function () {
	    $('#new_blog_name').focus();
	})
});

function on_create_blog_submit(){
	var new_blog_name = $('#new_blog_name').val();
	if(new_blog_name.length > 0)
		window.location.href = "/admin.php?create=" + new_blog_name;
}

function on_page_submit(url_to_go_to){
	var edited_blog_content = $('#edit_blog').val();
	var xhttp = new XMLHttpRequest();
	xhttp.open("POST", "/admin.php?save=" + url_to_go_to, true);
	xhttp.send(edited_blog_content);
}

function on_go_to_page(page) {
	window.location.replace(page);
}

function on_delete_image() {
	var checked_images = $(".add_cursor:checked");
	var images_names_to_delete = "";
	$.each(checked_images, function(key, value) {
		images_names_to_delete += value.id + ",";
	});
	window.location.href = "/admin.php?delete=" + images_names_to_delete;
}

function on_delete_blog(blog_names_to_delete) {
	console.log("/admin.php?delete_blog=" + blog_names_to_delete);
	window.location.href = "/admin.php?delete_blog=" + blog_names_to_delete;
}

function log_out() {
	console.log("logging out");
	window.location.href = "/logout.php";
}

$(document).ready(function()
{
	$(":checkbox").change(function() {
	    if(this.checked) {
	    	var link = $(this).closest(".container");
			$(link).css("border-color", "rgb(255,206,211)");
	    }
	    else {
	    	var link = $(this).closest(".container");
			$(link).css("border-color", "transparent");
	    }
	});
});
