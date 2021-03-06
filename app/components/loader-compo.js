import Component from '@ember/component';

export default Component.extend({
  percent:null,
  index:null,
    init()
    {
    this._super(...arguments);

    var $ppc = $('.progress-pie-chart').eq(this.get('index'));
    var deg = 360 * this.get('percent') / 100;

    if (this.get('percent') > 50) {
       $ppc.addClass('gt-50');
    }
     $('.ppc-progress-fill').eq(this.get('index')).css('transform', 'rotate(' + deg + 'deg)');
     $('.ppc-percents span').eq(this.get('index')).html(this.get('percent') + '%');

    }

});
