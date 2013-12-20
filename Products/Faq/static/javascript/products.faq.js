faq_displayAll = 0;
faq_items = 0;

function toggle(id) {
    el = document.getElementById("faq_" + id);
    icon = document.getElementById("icon_" + id);
    if (el) {
        if (el.style.display == "block") {
            el.style.display = "none";
            icon.src = "treeCollapsed.gif";
        } else {
            el.style.display = "block";
            icon.src = "treeExpanded.gif";
        }
    }
}

function toggle_all(faq_items) {
    for (var i = 1; i <= faq_items; i++) {
        el = document.getElementById("faq_" + i);
        icon = document.getElementById("icon_" + i);
        if (el) {
            if (faq_displayAll) {
                el.style.display = "none";
                icon.src = "treeCollapsed.gif";
            } else {
                el.style.display = "block";
                icon.src = "treeExpanded.gif";
            }
        }
    }
    faq_displayAll = (faq_displayAll ? 0 : 1);
}

function overLinkStyle(link_id) {
    document.getElementById(link_id).style.cursor = 'pointer';
}

function outLinkStyle(link_id) {
    document.getElementById(link_id).style.cursor = 'default';
}

$(document).ready(function () {
    var faqList = $('#faq-list'),
        buttons = $(faqList.find('.toggle-button')),
        faqTitles = $(faqList.find('.faq-title')),
        displayAllButton = $('.faq-show-all'),
        displayAll = true;

    function init() {
        faqList.listnav({
            showCounts: false
        });
        displayAllButton.click(toggleAll);
        buttons.click(toggleItem);
        faqTitles.click(toggleItem);
    }

    function toggleAll() {
        if(displayAll) {
            $('.faq_answer').slideDown();
            $(this).html('Verberg Alles');
            buttons.addClass('rotate');
        }
        else {
            $('.faq_answer').slideUp();
            $(this).html('Toon Alles');
            buttons.removeClass('rotate');
        }
        displayAll = !displayAll;

    }

    function toggleItem(e){
        var answer = $(this).siblings('.faq_answer'),
            toggleButton = $(this).parent().find('.toggle-button');
        e.preventDefault();
        $(this).siblings('.faq_answer').slideToggle();
        toggleButton.toggleClass('rotate');
    }

    $('.ln-disabled').click(function (e) {
        e.preventDefault();
        return false;
    });

    init();

});
