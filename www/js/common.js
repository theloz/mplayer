function loadCommonBahaviors(){
    $$('.backlink').on('click', function(e){
        var backurl = $$(this).attr('data-back');
        // mainView.router.back();
        mainView.router.load({pageName: backurl});

    });
}
