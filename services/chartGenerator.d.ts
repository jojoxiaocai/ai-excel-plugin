/**
 * 图表生成服务
 * 使用 Excel API 创建图表
 */
import { ChartConfig, ChartType } from '../types/types';
/**
 * 生成图表
 */
export declare function generateChart(config: ChartConfig, location?: 'current' | 'newSheet'): Promise<void>;
/**
 * 删除图表
 */
export declare function deleteChart(chartName: string): Promise<void>;
/**
 * 更改图表类型
 */
export declare function changeChartType(chartName: string, newType: ChartType): Promise<void>;
/**
 * 获取活动工作表的所有图表
 */
export declare function getAllCharts(): Promise<string[]>;
//# sourceMappingURL=chartGenerator.d.ts.map