import { isPositiveInteger, isDivisibleBy } from './utils';
import { CLASS_NAME, SELECTOR, MONEY } from './constants';
import Lotto from './Lotto';
import createTemplate from './templates';
import {
  getElement,
  getElements,
  alertMessage,
  bindEventListener,
  render,
  initInput,
  disableElement,
  toggleClassName,
} from './dom';

export default class LottoApp {
  constructor(app) {
    this.lotto = new Lotto();
    this.$app = getElement(app);

    render(this.$app, createTemplate.paymentSection());
    this.bindEvent();
  }

  onSubmitLottoResultButton() {
    render(this.$app, createTemplate.lottoResultSection());
  }

  onClickToggleButton() {
    toggleClassName(
      getElement(SELECTOR.LOTTO_LIST_TOGGLE_BUTTON),
      CLASS_NAME.TOGGLE_SWITCH
    );

    toggleClassName(
      getElement(SELECTOR.LOTTO_LIST),
      CLASS_NAME.DIRECTION_COLUMN
    );

    getElements(SELECTOR.LOTTO).forEach((element) => {
      element.classList.toggle(CLASS_NAME.DISPLAY_FLEX);
    });

    getElements(SELECTOR.LOTTO_NUMBER).forEach((element) => {
      element.classList.toggle(CLASS_NAME.INVISIBLE);
    });
  }

  onSubmitPaymentButton() {
    const $paymentInput = getElement(SELECTOR.PAYMENT_INPUT);

    try {
      const purchasedLottoCount = isDivisibleBy(
        isPositiveInteger($paymentInput.valueAsNumber),
        MONEY.STANDARD
      );

      toggleClassName(getElement(SELECTOR.PAYMENT_BUTTON), CLASS_NAME.DISABLED);

      disableElement(getElement(SELECTOR.PAYMENT_BUTTON));
      disableElement(getElement(SELECTOR.PAYMENT_INPUT));

      this.lotto.setLotto(purchasedLottoCount);

      render(this.$app, createTemplate.purchasedSection(this.lotto.getLotto()));
      render(this.$app, createTemplate.lastWeekWinningNumberSection());
      render(this.$app, createTemplate.resultCheckingSection());
    } catch (error) {
      alertMessage(error.message);
      initInput($paymentInput);
    }
  }

  bindEvent() {
    bindEventListener({
      appElement: this.$app,
      type: 'click',
      selector: SELECTOR.PAYMENT_BUTTON,
      callback: this.onSubmitPaymentButton.bind(this),
    });

    bindEventListener({
      appElement: this.$app,
      type: 'click',
      selector: SELECTOR.LOTTO_LIST_TOGGLE_BUTTON,
      callback: this.onClickToggleButton.bind(this),
    });

    bindEventListener({
      appElement: this.$app,
      type: 'click',
      selector: '#result-checking-button',
      callback: this.onSubmitLottoResultButton.bind(this),
    });
  }
}
