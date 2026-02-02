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
//# sourceMappingURL=dataProcessor.d.ts.map