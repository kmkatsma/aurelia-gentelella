export class Topbar {
 
    toggleClicked(event: MouseEvent)
    {
        var target = event.srcElement.id;
        var body = $('body');
        var menu = $('#sidebar-menu');
        
        // toggle small or large menu
        if (body.hasClass('nav-md')) {
            menu.find('li.active ul').hide();
            menu.find('li.active').addClass('active-sm').removeClass('active');
        } else {
            menu.find('li.active-sm ul').show();
            menu.find('li.active-sm').addClass('active').removeClass('active-sm');
        }
        body.toggleClass('nav-md nav-sm');

    }

}
  
     



  