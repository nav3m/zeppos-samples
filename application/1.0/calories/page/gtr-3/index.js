import {
  COMMON_TITLE_TEXT,
  EQUIVALENT_TO_BUTTON,
  EQUIVALENT_TO_FOOD_ICON,
} from '../../utils/styles'
import { FOOD_CALORIES } from '../../utils/constants'
const logger = DeviceRuntimeCore.HmLogger.getLogger('calories')
const globalData = getApp()._options.globalData

Page({

  build() {
    let calories = hmSensor.createSensor(hmSensor.id.CALORIE).current // Math.floor(Math.random() * 1000)
    let currentFood = globalData.foodType

    hmUI.createWidget(hmUI.widget.TEXT, COMMON_TITLE_TEXT)

    let activeIndex = FOOD_CALORIES.findIndex(
      (item) => item.type === currentFood,
    )
    this.calculate(calories, FOOD_CALORIES[activeIndex])
    hmUI.createWidget(hmUI.widget.BUTTON, {
      ...EQUIVALENT_TO_BUTTON,
      click_func: () => {
        hmApp.gotoPage({
          file: 'page/gtr-3/food-list',
        })
      },
    })
  },
  calculate(currentCalories, foodData) {
    let { value, type } = foodData
    let count = 1

    this.drawFood( type) // Bar code card icon
  },
  drawFood(type) {
    hmUI.createWidget(hmUI.widget.IMG, {
      ...EQUIVALENT_TO_FOOD_ICON,
      src: `cards/${type}.png`,
    })
  },
  onReady() {},

  onShow() {},

  onHide() {},

  onDestroy() {},
})
