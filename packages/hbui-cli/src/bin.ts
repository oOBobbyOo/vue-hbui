#!/usr/bin/env node
import { Command } from 'commander'
import { CREATE_SUPPORT_TYPES } from './shared/constant'
import { createAction, validateCreateType } from './commands/create'
import createSidebarAction from './commands/create-sidebar'
import createDtsAction from './commands/create-dts'
import createLibEntryAction from './commands/create-lib-entry'

const program = new Command()

program
  .command('create [name...]')
  .description('创建一个组件模板或配置文件')
  .option('-t --type <type>', `创建类型，可选值：${CREATE_SUPPORT_TYPES.join(', ')}`, validateCreateType)
  .option('-e --env <env>', '环境，可选值：dev, prod')
  .option('--ignore-parse-error', '忽略解析错误', false)
  .option('--cover', '覆盖原文件', false)
  .action(createAction)

program.command('generate:sidebar').description('生成文档侧边栏导航').action(createSidebarAction)

program.command('generate:dts').description('生成ts类型文件').action(createDtsAction)

program.command('generate:lib-entry').description('生成组件入口文件').action(createLibEntryAction)

program.parse(process.argv)
