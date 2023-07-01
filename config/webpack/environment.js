const { environment } = require('@rails/webpacker');

environment.addExternals({
  '@hotwired/turbo-rails': 'commonjs @hotwired/turbo-rails',
});

module.exports = environment;
