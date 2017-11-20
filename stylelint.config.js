module.exports = {
  processors: ['stylelint-processor-html'],
  extends: ['stylelint-config-standard'],
  rules: {
    'block-no-empty': null,
    'color-no-invalid-hex': true,
    'declaration-colon-space-after': 'always',
    'indentation': [2, { 'severity': 'warning' } ],
    'max-empty-lines': 2,
    'unit-whitelist': ['em', 'rem', '%', 's', 'px'],
    'at-rule-no-unknown': null
  }  
};

