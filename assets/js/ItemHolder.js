(function ($) {
    $('carouselhendler').on('load', function () {
        var ItemHolder = $('carouselhendler');
        $.getJSON("assets/data/ItemList.json", function (json) {
            var Item = '<article>' +
                '< a href = \"#carousel\" class=\"image featured circled scrolly\" > <img src="' + json.items.image + '" alt=\"\" /></a >\n' +
                '<header>' +
                '<h3><a href=\"#carousel\" class=\"circled scrolly\">' + json.items.title + '</a></h3>' +
                '</header>' +
                '<p>' + json.items.discript + '</p>' +
                '</article >';
            ItemHolder.innerHTML(Item);
        });
    });
})(jQuery);