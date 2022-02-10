$('[data-toggle="popover"]').popover({
  html: true,
  content: function() {
    var id = $(this).attr('id')
    return $('#po' + id).html();
  }
});