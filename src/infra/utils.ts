import * as cdk from 'aws-cdk-lib'
import { Stack } from 'aws-cdk-lib'



export function getSuffixFromStack(stack: Stack) {
    const shortStackId = cdk.Fn.select(2, cdk.Fn.split('/', stack.stackId))
    const stackSuffix = cdk.Fn.select(4, cdk.Fn.split('-', shortStackId))
    return stackSuffix
}