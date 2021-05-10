import {
  ElButton,
  ElContainer,
  ElHeader,
  ElAside,
  ElMain,
  ElFooter,
  ElMenu,
  ElSubmenu,
  ElMenuItemGroup,
  ElMenuItem,
  ElForm,
  ElFormItem,
  ElInput,
  ElTable,
  ElMessage,
  ElTableColumn,
  ElRadio,
  ElRadioButton,
  ElRadioGroup,
  ElCheckbox,
  ElCheckboxButton,
  ElCheckboxGroup,
  ElSwitch,
  ElTimePicker,
  ElTimeSelect,
  ElTimeline,
  ElTimelineItem,
  ElCol,
  ElCollapse,
  ElCollapseItem,
  ElCollapseTransition,
  ElColorPicker,
  ElDatePicker,
  ElSelect,
  ElOption,
  ElOptionGroup,
  ElRate,
  ElCarousel,
  ElCarouselItem,
  ElPagination,
  ElTooltip,
  ElDialog,
  ElProgress,
  ElTag,
  ElPopover,
  ElCascader
} from 'element-plus'
import lang from 'element-plus/lib/locale/lang/zh-cn'
import locale from 'element-plus/lib/locale'
// import {Form, FormItem, Input} from 'element-ui'

export default app => {
  locale.use(lang)
  app.use(ElPopover)
  app.use(ElDialog)
  app.use(ElTooltip)
  app.use(ElPagination)
  app.use(ElCarouselItem)
  app.use(ElCarousel)
  app.use(ElRate)
  app.use(ElButton)
  app.use(ElContainer)
  app.use(ElHeader)
  app.use(ElAside)
  app.use(ElMain)
  app.use(ElFooter)
  app.use(ElMenu)
  app.use(ElSubmenu)
  app.use(ElMenuItemGroup)
  app.use(ElMenuItem)
  app.use(ElForm)
  app.use(ElFormItem)
  app.use(ElInput)
  app.use(ElMessage)
  app.use(ElTable)
  app.use(ElTableColumn)
  app.use(ElRadio)
  app.use(ElRadioButton)
  app.use(ElRadioGroup)
  app.use(ElCheckbox)
  app.use(ElCheckboxButton)
  app.use(ElCheckboxGroup)
  app.use(ElSwitch)
  app.use(ElTimePicker)
  app.use(ElTimeSelect)
  app.use(ElTimeline)
  app.use(ElTimelineItem)
  app.use(ElCol)
  app.use(ElCollapse)
  app.use(ElCollapseItem)
  app.use(ElCollapseTransition)
  app.use(ElColorPicker)
  app.use(ElDatePicker)
  app.use(ElSelect)
  app.use(ElOption)
  app.use(ElOptionGroup)
  app.use(ElProgress)
  app.use(ElTag)
  app.use(ElCascader)
}
