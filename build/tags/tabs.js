riot.tag('tabs', '<h1>Tabs</h1> <ul class="list--bare"> <li class="{ tab: true, is-active: isActiveTab(\'tab1\') }" data-tab="tab1" onclick="{ toggleTab }">Tab1</li> <li class="{ tab: true, is-active: isActiveTab(\'tab2\') }" data-tab="tab2" onclick="{ toggleTab }">Tab2</li> <li class="{ tab: true, is-active: isActiveTab(\'tab3\') }" data-tab="tab3" onclick="{ toggleTab }">Tab3</li> </ul> <div class="tabContent"> <div class="{ tabContent__item: true, is-active: isActiveTab(\'tab1\') }">Tab 1 content</div> <div class="{ tabContent__item: true, is-active: isActiveTab(\'tab2\') }">Tab 2 content</div> <div class="{ tabContent__item: true, is-active: isActiveTab(\'tab3\') }">Tab 3 content</div> </div>', function(opts) {
  this.activeTab = null

  this.isActiveTab = function(tab) {
    return this.activeTab === tab
  }.bind(this)

  this.toggleTab = function(e) {
    this.activeTab = e.srcElement.getAttribute('data-tab')
  }.bind(this)
})
