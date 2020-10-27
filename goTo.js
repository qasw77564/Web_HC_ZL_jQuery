$("*").each(function (index, element) {
    // 此元素被點選後執行
    $(this).click(function (e) { 
        // 取得被點選元素的屬性：data-gt-target
        var target = $(this).attr("data-gt-target");
        console.log(target);
    })
});