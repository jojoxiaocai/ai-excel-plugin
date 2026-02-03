/**
 * NLP 解析服务 - 本地模式
 * 使用关键词匹配进行自然语言解析
 */
import { ParsedRequest, FilterCondition } from '../types/types';
/**
 * 本地解析请求
 */
export declare function parseLocalRequest(input: string, headers: string[]): ParsedRequest;
/**
 * 提取筛选条件
 */
export declare function extractFilters(input: string, headers: string[]): FilterCondition[];
/**
 * 【新增】基于数据值的本地解析请求
 * 通过将用户输入与数据中的实际值进行匹配，提高实体识别准确率
 * @param input 用户输入
 * @param headers 表头列表
 * @param knownValues 各列的已知值集合，key 为列名，value 为该列所有唯一值
 */
export declare function parseLocalRequestWithData(input: string, headers: string[], knownValues: Map<string, string[]>): ParsedRequest;
/**
 * 【新增】基于数据值的筛选条件提取
 * 通过检查用户输入中是否包含数据中的实际值来识别筛选条件
 */
export declare function extractFiltersWithDataValues(input: string, headers: string[], knownValues: Map<string, string[]>): FilterCondition[];
/**
 * 【辅助函数】从数据中提取各列的唯一值
 * 用于构建 knownValues Map
 */
export declare function extractKnownValuesFromData(headers: string[], data: Record<string, unknown>[]): Map<string, string[]>;
//# sourceMappingURL=nlpParser.d.ts.map