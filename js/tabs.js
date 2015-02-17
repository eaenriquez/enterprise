/**
* Tab Control (TODO: bitly link to docs)
*/

(function (factory) {
  if (typeof define === 'function' && define.amd) {
      // AMD. Register as an anonymous module depending on jQuery.
      define(['jquery'], factory);
  } else {
      // No AMD. Register plugin with global jQuery object.
      factory(jQuery);
  }
}(function ($) {

  // Used for changing the stacking order of jQuery events.  This is needed to override certain
  // Events invoked by other plugins http://stackoverflow.com/questions/2360655
  $.fn.bindFirst = function(name, fn) {
    this.on(name, fn);
    this.each(function() {
        var handlers = $._data(this, 'events')[name.split('.')[0]];
        // take out the handler we just inserted from the end
        var handler = handlers.pop();
        // move it at the beginning
        handlers.splice(0, 0, handler);
    });
  };

  $.fn.tabs = function(options) {

    // Tab Settings and Options
    var pluginName = 'tabs',
        defaults = {
          tabCounts: false,
        },
        settings = $.extend({}, defaults, options);

    // Plugin Constructor
    function Tabs(element) {
      this.settings = $.extend({}, settings);
      this.element = $(element);
      this.init();
    }

    // Actual Plugin Code
    Tabs.prototype = {

      init: function(){
        this
          .setup()
          .build()
          .setupEvents();

        this.activate(this.tablist.children('li:first-child').children('a').attr('href'));
        this.setOverflow();
        this.focusBar();
      },

      setup: function() {
        if (!this.settings.tabCounts && this.element.attr('data-tab-counts')) {
          this.settings.tabCounts = this.element.attr('data-tab-counts') === 'true';
        }
        return this;
      },

      build: function() {
        var self = this;

        self.container = $(this.element);
        if (self.settings.tabCounts) {
          self.container.addClass('has-counts');
        }

        //For each tab panel set the aria roles and hide it
        self.panels = self.container.children('div')
            .attr({'class': 'tab-panel', 'role': 'tabpanel'}).hide();

        self.panels.find('h3:first').attr('tabindex', '0');

        //Attach Tablist role and class to the tab headers container
        self.header = self.container.find('ul:first')
                        .attr({'class': 'tab-list', 'role': 'tablist',
                               'aria-multiselectable': 'false'});
        self.tablist = self.element.find('.tab-list');

        self.moreButton = self.tablist.next('.tab-more');

        self.animatedBar = $('<div class="animated-bar" role="presentation"></div>').insertBefore(self.tablist);

        // Add the markup for the "More" button if it doesn't exist.
        if (self.moreButton.length === 0) {
          var button = $('<div>').attr({'class': 'tab-more'});
          button.append( $('<span>').text('More')); //TODO: Localize
          button.append('<svg class="icon" aria-hidden="true"><use xlink:href="#icon-dropdown"></svg>');
          self.tablist.after(button);
          self.moreButton = button;
        }

        //for each item in the tabsList...
        self.anchors = self.tablist.children('li:not(.separator):not(:hidden)').children('a');
        self.anchors.each(function () {
          var a = $(this);
          a.attr({'role': 'tab', 'aria-expanded': 'false', 'aria-selected': 'false', 'tabindex': '-1'})
           .parent().attr('role', 'presentation').addClass('tab');

          if (a.parent().hasClass('dismissible')) {
            $('<svg class="icon"><use xlink:href="#icon-delete"></svg>').insertAfter(a);
          }

          // Find and configure dropdown tabs
          var dd = a.next();
          if (dd.length > 0 && dd.is('ul')) {
            a.parent().addClass('has-popupmenu').popupmenu({
              menu: dd,
              trigger: 'click'
            }, function (href) {
              self.activate(href);
              self.panels.filter(href).find('h3:first-child').focus();
              self.updateAria(a);
            });

            a.removeAttr('role').removeAttr('aria-expanded').removeAttr('aria-selected');
            $('<svg class="icon"><use xlink:href="#icon-dropdown"></svg>').insertAfter(a);
          }

          if (self.settings.tabCounts && $(this).find('.count').length === 0) {
            $(this).prepend('<span class="count">0 </span>');
          }
        });

        return this;
      },

      setupEvents: function() {
        var self = this;

        // Bind all "a" and "li" events to the tablist so that we can add/remove without issue
        self.tablist.on('click.tabs', '> li', function() {
          self.handleClick($(this));
        }).on('click.tabs', 'a', function(e) {
          // Clicking the 'a' triggers the click on the 'li'
          e.preventDefault();
          e.stopPropagation();
          $(this).parent().trigger('click');
        }).on('click.tabs', '.icon', function(e) {
          if ($(this).hasClass('dismissible')) {
            e.preventDefault();
            e.stopPropagation();
            self.remove($(this).prev().attr('href'));
          }
        }).on('focus.tabs', 'a', function() {
          self.handleFocus($(this));
        }).on('keydown.tabs', 'a', function(e) {
          self.handleKeyDown(e);
        });

        self.tablist.find('a').on('blur.tabs', function() {
          $(this).parent().removeClass('is-focused');
          setTimeout(function() {
            self.checkFocusedElements();
          }, 10);
        });

        // Setup the "more" function
        self.moreButton.on('click.tabs', function(e) {
          if (!(self.container.hasClass('has-more-button'))) {
            e.stopPropagation();
          }
          if (self.moreButton.hasClass('popup-is-open')) {
            self.popupmenu.close();
            self.moreButton.removeClass('popup-is-open');
          } else {
            self.buildPopupMenu();
          }
        });

        // Check to see if we need to add/remove the more button on resize
        $(window).on('resize.tabs', function() {
          self.setOverflow();
          self.focusBar();
        });

        return this;
      },

      handleClick: function(li) {
        var nonVisibleExcludes = ':not(.separator):not(:hidden)';

        this.tablist.children('li' + nonVisibleExcludes).removeClass('is-selected');
        li.addClass('is-selected').children('a').focus();

        // Don't activate a dropdown tab, but open its popupmenu.
        if (li.is('.has-popupmenu')) {
          li.data('popupmenu').open();
          return;
        }

        this.activate(li.find('a').attr('href'));
        if (this.popupmenu) {
          this.popupmenu.close();
        }
        this.focusBar(li);
      },

      handleFocus: function(a) {
        var invisibleExcludes = ':not(.separator):not(:hidden)',
          allExcludes = invisibleExcludes + ':not(:disabled)',
          li = a.parent();

        this.tablist.children('li' + allExcludes).add(this.moreButton).removeClass('is-selected');
        li.addClass('is-focused');

        if (this.isTabOverflowed(li)) {
          this.buildPopupMenu(a.attr('href'));
          this.moreButton.addClass('is-focused is-selected');
          this.focusBar(this.moreButton);
        } else {
          if (li.not('.has-popupmenu').length > 0) {
            this.activate(li.find('a').attr('href'));
          }
          li.addClass('is-selected');
          this.focusBar(li);
        }
      },

      handleKeyDown: function(e) {
        if (e.shiftKey || e.ctrlKey || e.altKey || e.metaKey) {
          return;
        }

        if ((e.which < 32 && e.which !== 13) || e.which > 46) {
          return;
        }

        var self = this,
          allExcludes = ':not(.separator):not(:disabled):not(:hidden)',
          currentLi = $(e.currentTarget).parent(),
          targetLi,
          tabs = self.tablist.children('li' + allExcludes);

        function previousTab() {
          var i = tabs.index(currentLi) - 1;
          while (i > -1 && !targetLi) {
            if (tabs.eq(i).is(allExcludes)) {
              return tabs.eq(i);
            }
            i = i - 1;
          }
          return self.tablist.children('li' + allExcludes).last();
        }

        function nextTab() {
          var i = tabs.index(currentLi) + 1;
          while(i < tabs.length && !targetLi) {
            if (tabs.eq(i).is(allExcludes)) {
              return tabs.eq(i);
            }
            i++;
          }
          return self.tablist.children('li' + allExcludes).first();
        }

        switch(e.which) {
          case 13:
            e.preventDefault();
            if (currentLi.hasClass('has-popupmenu')) {
              currentLi.data('popupmenu').open();
            }
            return;
          case 38:
            e.preventDefault(); // jshint ignore:line
          case 37:
            targetLi = previousTab();
             e.preventDefault();
            break;
          case 40:
            e.preventDefault(); // jshint ignore:line
          case 39:
            targetLi = nextTab();
            e.preventDefault();
            break;
        }

        // Use the matching option in the popup menu if the target is hidden by overflow.
        if (this.isTabOverflowed(targetLi)) {
          e.preventDefault();
          var oldHref = targetLi.children('a').attr('href');
          // setTimeout is used to bypass triggering of the keyboard when self.buildPopupMenu() is invoked.
          setTimeout(function() {
            self.buildPopupMenu(oldHref);
          }, 0);
          return;
        }

        targetLi.children('a').focus();
      },

      activate: function(href) {
        var self = this,
          a = self.anchors.filter('[href="' + href + '"]'),
          ui = {
                newTab: a.parent(),
                oldTab: self.anchors.parents().find('.is-selected'),
                panels: self.panels.filter('[id="' + href.replace(/#/g, '') + '"]'),
                oldPanel: self.panels.filter(':visible')
              };

        var isCancelled = self.element.trigger('beforeActivate', null, ui);
        if (!isCancelled) {
          return;
        }

        self.panels.hide();
        self.updateAria(a);

        ui.panels.stop().fadeIn(function() {
          $('#tooltip').addClass('is-hidden');
          $('#dropdown-list, #multiselect-list').remove();
          self.element.trigger('activate', null, ui);
        });

        //Init Label Widths..
        ui.panels.find('.autoLabelWidth').each(function() {
          var container = $(this),
            labels = container.find('.inforLabel');

          if (labels.autoWidth) {
            labels.autoWidth();
          }
        });

        ui.panels.find(':first-child').filter('h3').attr('tabindex', '0');
      },

      updateAria: function(a) {
        if (!a) {
          return;
        }
        //hide old tabs
        this.anchors.attr({
          'aria-selected': 'false',
          'aria-expanded': 'false',
          'tabindex': '-1'
        }).parent().removeClass('is-selected');

        //show current tab
        if (!this.isTabOverflowed(a.parent())) {
        a.attr({
            'aria-selected': 'true',
            'aria-expanded': 'true',
            'tabindex': '0'
          }).parent().addClass('is-selected');
        }
      },

      // Adds a new tab into the list and properly binds events
      add: function(tabId, options, atIndex) {
        if (!tabId) {
          return this;
        }

        if (!options) {
          options = {};
        }

        // Sanitize
        tabId = '' + tabId.replace(/#/g, '');
        options.name = options.name ? options.name.toString() : '';
        options.isDismissible = options.isDismissible ? options.isDismissible === true : false;
        options.isDropdown = options.isDropdown ? options.isDropdown === true : false;

        function getObjectFromSelector(sourceString) {
          var contentType = typeof sourceString;
          switch(contentType) {
            case 'string':
              var hasId = sourceString.match(/#/g);
              // Text Content or a Selector.
              if (hasId !== null) {
                var obj = $(sourceString);
                sourceString = obj.length ? $(sourceString).clone() : sourceString;
              }
              // do nothing if it's just a string of text.
              break;
            case 'object':
              // jQuery object or HTML Element
              sourceString = $(sourceString).clone();
              break;
          }
        }
        if (options.content) {
          getObjectFromSelector(options.content);
        }
        if (options.dropdown) {
          getObjectFromSelector(options.dropdown);
        }

        // Build
        var tabHeaderMarkup = $('<li role="presentation" class="tab"></li>'),
          anchorMarkup = $('<a href="#'+ tabId +'" role="tab" aria-expanded="false" aria-selected="false" tabindex="-1">'+ options.name +'</a>'),
          tabContentMarkup = $('<div id="'+ tabId +'" class="tab-panel" role="tabpanel" style="display: none;"></div>');

        tabHeaderMarkup.html(anchorMarkup);
        tabContentMarkup.html(options.content);

        if (options.isDismissible) {
          tabHeaderMarkup.addClass('dismissible');
          tabHeaderMarkup.append('<svg class="icon"><use xlink:href="#icon-delete"></svg>');
        }

        if (this.settings.tabCounts) {
          anchorMarkup.prepend('<span class="count">0 </span>');
        }

        // Insert markup at the very end, or at the specified index.
        if (atIndex === undefined || isNaN(atIndex)) {
          this.tablist.append(tabHeaderMarkup);
          this.container.append(tabContentMarkup);
        } else {
          var tabs = this.tablist.children('li'),
            insertBefore = tabs.eq(atIndex).length > 0,
            targetIndex = insertBefore ? atIndex : tabs.length - 1;

          if (!insertBefore) {
            tabHeaderMarkup.insertAfter(tabs.eq(targetIndex));
            tabContentMarkup.insertAfter(this.container.children().eq(targetIndex + 2));
          } else {
            tabHeaderMarkup.insertBefore(tabs.eq(targetIndex));
            tabContentMarkup.insertBefore(this.container.children().eq(targetIndex + 2));
          }
        }

        // Add each new part to their respective collections.
        this.panels = this.panels.add(tabContentMarkup);
        this.anchors = this.anchors.add(anchorMarkup);

        // Adjust tablist height
        this.setOverflow();

        return this;
      },

      // Removes a tab from the list and cleans up properly
      remove: function(tabId) {
        if (!tabId) {
          return this;
        }
        tabId = tabId.replace(/#/g, '');

        var targetAnchor = this.anchors.filter('[href="#' + tabId + '"]'),
          targetLi = targetAnchor.parent(),
          targetPanel = this.panels.filter('#' + tabId);

        // Remove these from the collections
        this.panels = this.panels.not(targetPanel);
        this.anchors = this.anchors.not(targetAnchor);

        // Kill associated events
        targetLi.off('click.tabs');
        targetAnchor.off('click.tabs focus.tabs keydown.tabs');

        // Remove Markup
        targetLi.remove();
        targetPanel.remove();

        // Adjust tablist height
        this.setOverflow();

        return this;
      },

      // Hides a tab
      hide: function(tabId) {
        if (!tabId) {
          return;
        }
        this.anchors.filter('[href="#' + tabId + '"]').parent().addClass('hidden');
        return this;
      },

      // Shows a tab
      show: function(tabId) {
        if (!tabId) {
          return;
        }
        this.anchors.filter('[href="#' + tabId + '"]').parent().removeClass('hidden');
        return this;
      },

      setOverflow: function () {
        if (this.tablist[0].scrollHeight > this.tablist.outerHeight() + 1) {
          this.element.addClass('has-more-button');
        } else {
          this.element.removeClass('has-more-button');
        }
        this.setMoreActive();
      },

      setMoreActive: function () {
        var self = this,
          selectedTab = self.header.find('.is-selected');

        if (self.isTabOverflowed(selectedTab)) {
          self.moreButton.addClass('is-selected');
        } else {
          self.moreButton.removeClass('is-selected');
          self.checkFocusedElements();
        }
      },

      buildPopupMenu: function(startingHref) {
        var self = this;
        if (self.popupmenu) {
          $('#tab-container-popupmenu').off('focus.popupmenu');
          self.popupmenu.close();
          $('#tab-container-popupmenu').remove();
          $(document).off('keydown.popupmenu');
        }

        // Build the new markup for the popupmenu if it doesn't exist.
        // Reset it if it does exist.
        var menuHtml = $('#tab-container-popupmenu');
        if (menuHtml.length === 0) {
          menuHtml = $('<ul>').attr('id', 'tab-container-popupmenu').appendTo('body');
        } else {
          menuHtml.html('');
        }

        // Build menu options from hidden tabs
        var tabs = self.tablist.children('li:not(.separator)');
        $.each(tabs, function(i, item) {
          var popupLi;

          if (self.isTabOverflowed(item) && $(item).is(':not(:hidden)')) {
            // Add a separator to the list
            if (menuHtml.find('li').length > 0 && $(item).prev().is('.separator')) {
              $(item).prev().clone().appendTo(menuHtml);
            }
            if ($(item).is(':not(.separator)')) {
              popupLi = $(item).clone().removeClass('tab is-selected');
              popupLi.find('.icon').remove(); // NOTE: Remove this to show the close icon in overflow menu
              popupLi
                .appendTo(menuHtml)
                .attr('data-tab-href', $(item).children('a').attr('href'));
            }
          }
        });

        self.tablist.children('li:not(.separator)').removeClass('is-focused');

        // Invoke the popup menu on the button.
        self.moreButton.popupmenu({
          autoFocus: false,
          menu: 'tab-container-popupmenu',
          trigger: 'immediate'
        });
        self.moreButton.addClass('popup-is-open');
        self.popupmenu = self.moreButton.data('popupmenu');
        self.focusBar(self.moreButton);

        self.popupmenu.element.on('close.popupmenu', function() {
          $(this).off('close.popupmenu');
          self.moreButton.removeClass('popup-is-open');
          self.setMoreActive();
          self.focusBar();
        });

        var menu = self.popupmenu.menu;

        // Add the "is-selected" class to the currently focused item in this popup menu.
        menu.on('focus.popupmenu', 'a', function() {
          $(this).parents('ul').find('li').removeClass('is-selected');
          $(this).parent().addClass('is-selected');
          self.activate($(this).attr('href'));
          self.moreButton.addClass('is-selected');
          self.focusBar();
        }).on('destroy.popupmenu', function() {
          $('#tab-container-popupmenu').remove();
        });

        // If the optional startingIndex is provided, focus the popupmenu on the matching item.
        // Otherwise, focus the first item in the list.
        if (startingHref) {
          menu.find('a[href="' + startingHref + '"]').focus();
        } else if (self.tablist.children('.is-selected').length > 0) {
          menu.find('a[href="' + self.tablist.children('.is-selected').children('a').attr('href') + '"]').focus();
        } else {
          menu.find('li:first-child > a').focus();
        }

        // Overrides a similar method in the popupmenu code that controls escaping of this menu when
        // pressing certain keys.  We override this here so that the controls act in a manner as if all tabs
        // are still visible (for accessiblity reasons), meaning you can use left and right to navigate the
        // popup menu options as if they were tabs.
        $(document).bindFirst('keydown.popupmenu', function(e) {
          var key = e.which,
            targetHref = '';

          function prevMenuItem() {
            // If the first item in the popup menu is already focused, close the menu and focus
            // on the last visible item in the tabs list.
            var first = menu.find('li.is-selected:first-child');
            if (first.length > 0) {
              e.preventDefault();
              $(document).off(e);
              self.popupmenu.close();
              $(self.anchors.filter('[href="' + first.attr('data-tab-href') + '"]')).parent().prev().children('a').focus();
            }
          }

          function nextMenuItem() {
            // If the last item in the popup menu is already focused, close the menu and focus
            // on the first visible item in the tabs list.
            var last = menu.find('li.is-selected:last-child');
            if (last.length > 0) {
              e.preventDefault();
              $(document).off(e);
              self.popupmenu.close();
              self.anchors.first().focus();
            }
          }

          switch(key) {
            case 13: // enter
              e.preventDefault();
              targetHref = menu.find('li.is-selected').attr('data-tab-href');
              self.popupmenu.close();
              break;
            case 27: // escape
              e.preventDefault();
              self.popupmenu.close();
              self.tablist.children('.is-selected').children('a').focus();
              break;
            case 37: // left
              e.stopPropagation();
              e.preventDefault();
              $(document).trigger({type: 'keydown.popupmenu', which: 38});
              break;
            case 38: // up
              prevMenuItem();
              break;
            case 39: // right
              e.stopPropagation();
              e.preventDefault();
              $(document).trigger({type: 'keydown.popupmenu', which: 40});
              break;
            case 40: // down
              nextMenuItem();
              break;
          }
        });
      },

      // Used for checking if a particular tab (in the form of a jquery-wrapped list item) is spilled into
      // the overflow area of the tablist container <UL>.
      isTabOverflowed: function(li) {
        if (!li || li.length === 0) {
          return true;
        }
        if (this.tablist.scrollTop() > 0) {
          this.tablist.scrollTop(0);
        }
        var offset = $(li).offset().top - this.tablist.offset().top;
        return offset >= this.tablist.height();
      },

      findLastVisibleTab: function() {
        var targetFocus = this.tablist.children('li:first-child');
        while(!(this.isTabOverflowed(targetFocus))) {
          targetFocus = targetFocus.next('li');
        }
        targetFocus.prev().find('a').focus();
      },

      focusBar: function(li) {
        var self = this,
          target = li !== undefined ? li :
            self.moreButton.hasClass('is-selected') ? self.moreButton :
            self.tablist.children('.is-selected').length > 0 ? self.tablist.children('.is-selected') : undefined;

        if (target === undefined) {
          return;
        }
        clearTimeout(self.animationTimeout);
        this.animatedBar.addClass('visible');
        this.animationTimeout = setTimeout(function() {
          self.animatedBar.css({
            'left' : (target.offset().left - 7) + 'px',
            'width' : (target.width() - 11) + 'px'
          });
        }, 0);
      },

      defocusBar: function() {
        var self = this,
          newLeft = (self.animatedBar.position().left + (self.animatedBar.outerWidth()/2)) + 'px';
        clearTimeout(self.animationTimeout);
        this.animatedBar.css({
          'left' : newLeft,
          'width' : '0'
        });
        this.animationTimeout = setTimeout(function() {
          self.animatedBar.removeClass('visible').removeAttr('style');
        }, 350);
      },

      checkFocusedElements: function() {
        var self = this,
          focusableItems = self.tablist;

        if (focusableItems.find('.is-selected').length === 0 && !self.moreButton.hasClass('is-selected')) {
          self.defocusBar();
        }
      },

      destroy: function(){
        this.panels.removeAttr('style');

        this.header
          .removeAttr('role')
          .removeAttr('aria-multiselectable');

        var tabs = this.tablist.children('li');
        tabs
          .off()
          .removeAttr('role')
          .removeClass('tab is-selected');

        tabs.filter('.has-popupmenu')
          .data('popupmenu').destroy();

        this.anchors
          .off()
          .removeAttr('role')
          .removeAttr('aria-expanded')
          .removeAttr('aria-selected')
          .removeAttr('tabindex');

        $(window).off('resize.tabs');

        if (this.moreButton.data('popupmenu')) {
          this.moreButton.data('popupmenu').destroy();
        }
        this.moreButton.remove();
        this.animatedBar.remove();

        $.removeData(this.element[0], pluginName);
      }
    };

    // Keep the Chaining and Init the Controls or Settings
    return this.each(function() {
      var instance = $.data(this, pluginName);
      if (instance) {
        instance.settings = $.extend(instance.settings, options);
      } else {
        instance = $.data(this, pluginName, new Tabs(this, settings));
      }
    });
  };
}));
