riot.tag('riot-typeahead', '<h2>Typeahead</h2> <div class="typeahead"> <input class="typeahead__input" name="input" type="text" value="{ text }" placeholder="Type to search cities" onkeyup="{ typeahead }" ></input> <ul class="typeahead__results list--bare { is-active: !selection }"> <li class="{ is-hidden: resultsPresent() }"><em>No cities found</em></li> <li each="{ result, i in results }" class="{ is-highlighted: result.isHighlighted }" onclick="{ parent.selectResult }">{result.name}</li> </ul> </div>', function(opts) {
  this.dataset = [
    { name: 'Charleston, SC' },
    { name: 'Charlotte, NC' },
    { name: 'Washington, DC' }
  ]
  this.results = []
  this.highlightedPosition = 1
  this.selection = true

  this.resultsPresent = function() {
    return this.results.length > 0
  }.bind(this)

  this.typeahead = function(e) {
    var keyCode = e.keyCode
    if (e.target.value === '') {
      this.selection = true
    } else if (keyCode === 38 || e.keyCode === 40) {
      this._highlight(keyCode)
    } else if (keyCode === 13) {
      this.text = this.results[this.highlightedPosition - 1].name
      this.input.value = this.text
      this.selection = true
    } else {
      this.highlightedPosition = 0
      this._search(e.target.value)
    }
  }.bind(this)

  this.selectResult = function(e) {
    this.text = e.item.result.name
    this.input.value = this.text
    this.selection = true
  }.bind(this)

  this._search = function(term) {
    var city, matches, result, i = 0, _this = this
    this.text = term
    this.results = []
    this.highlightedPosition = 1
    this.selection = false
    this.dataset.forEach(function(city, i) {
      matches = city.name.match(RegExp(_this.text, 'i'))
      if (matches) {
        result = { name: city.name }
        _this.results.push(result)
      }
    })
    this.results[0].isHighlighted = true
  }.bind(this)

  this._highlight = function(keyCode) {
    if (keyCode === 40 && this.highlightedPosition < this.results.length) {
      this._resetHighlight()
      this.highlightedPosition += 1
      this._setHighlightedResult()
    } else if (keyCode === 38 && this.highlightedPosition > 1) {
      this._resetHighlight()
      this.highlightedPosition -= 1
      this._setHighlightedResult()
    }
  }.bind(this)

  this._resetHighlight = function() {
    this.results.forEach(function(result) { result.isHighlighted = false })
  }.bind(this)

  this._setHighlightedResult = function() {
    this.results[this.highlightedPosition - 1].isHighlighted = true
  }.bind(this)
})
