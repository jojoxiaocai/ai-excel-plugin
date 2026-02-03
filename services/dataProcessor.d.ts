/**
 * 数据处理服务
 * 负责数据筛选、计算和聚合
 */
import { StructuredData, FilterCondition, CalculationType, CalculationResult, ChartConfig, ChartType, ChartValidation } from '../types/types';
/**
 * 根据条件筛选数据
 */
export declare function filterData(data: StructuredData, filters: FilterCondition[]): Record<string, unknown>[];
/**
 * 执行计算
 */
export declare function calculateResult(data: Record<string, unknown>[], field: string, calculation: CalculationType): CalculationResult;
/**
 * 为图表聚合数据
 */
export declare function aggregateForChart(data: StructuredData, dimension: string, metric: string, filters?: FilterCondition[]): {
    categories: string[];
    values: number[];
};
/**
 * 查找数值字段
 */
export declare function findNumericField(headers: string[], data: Record<string, unknown>[]): string | undefined;
/**
 * 准备图表配置
 */
export declare function prepareChartConfig(data: StructuredData, chartType: ChartType, dimension: string, metric: string, filters?: FilterCondition[], title?: string): ChartConfig;
/**
 * 验证图表数据
 */
export declare function validateChartData(categories: string[], values: number[]): ChartValidation;
/**
 * 获取图表类型名称
 */
export declare function getChartTypeName(type: ChartType): string;
/**
 * 格式化计算结果描述
 */
export declare function formatResultDescription(calculation: CalculationType, value: number | string, targetField: string, filters: FilterCondition[]): string;
/**
 * 表连接（INNER JOIN）
 * @param leftData 左表数据
 * @param rightData 右表数据
 * @param leftKey 左表连接键
 * @param rightKey 右表连接键
 * @returns 连接后的数据
 */
export declare function joinTables(leftData: StructuredData, rightData: StructuredData, leftKey: string, rightKey: string): StructuredData;
/**
 * 列间运算
 * @param data 数据
 * @param formula 公式，如 "销售额 - 成本" 或 "单价 * 数量"
 * @param resultField 结果字段名
 * @returns 添加了计算列的数据
 */
export declare function calculateColumn(data: StructuredData, formula: string, resultField: string): StructuredData;
/**
 * 计算指令类型定义
 */
export interface ComputeInstruction {
    action: 'join' | 'calculate' | 'filter' | 'group_by' | 'aggregate';
    leftTable?: string;
    rightTable?: string;
    leftKey?: string;
    rightKey?: string;
    formula?: string;
    resultField?: string;
    field?: string;
    value?: string | number;
    operator?: 'equals' | 'contains' | 'greater' | 'less';
    function?: 'sum' | 'avg' | 'max' | 'min' | 'count';
}
/**
 * 执行计算指令序列
 * @param instructions 指令列表
 * @param sheetsData 所有 Sheet 数据
 * @returns 计算结果
 */
export declare function executeInstructions(instructions: ComputeInstruction[], sheetsData: Map<string, StructuredData>): {
    data: StructuredData;
    result?: CalculationResult;
};
/**
 * 生成数据预览（用于减少 Token 消耗）
 * 只发送表头 + 少量样例行
 */
export declare function generateDataPreview(sheetsData: Map<string, StructuredData>, sampleRows?: number): object;
//# sourceMappingURL=dataProcessor.d.ts.map