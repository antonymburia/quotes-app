$('[data-toggle="popover"]').popover({html:!0,content:function(){var t=$(this).attr("id");return $("#po"+t).html()}});