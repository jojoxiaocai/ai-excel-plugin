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
//# sourceMappingURL=nlpParser.d.ts.map