/**
 * AI Excel 对话插件 - 类型定义
 */
export declare enum ErrorType {
    NO_SELECTION = "NO_SELECTION",
    INVALID_DATA = "INVALID_DATA",
    PARSE_ERROR = "PARSE_ERROR",
    CALCULATION_ERROR = "CALCULATION_ERROR",
    CHART_ERROR = "CHART_ERROR",
    API_ERROR = "API_ERROR",
    FIELD_NOT_FOUND = "FIELD_NOT_FOUND"
}
export declare class PluginError extends Error {
    type: ErrorType;
    constructor(type: ErrorType, message: string);
}
export interface StructuredData {
    headers: string[];
    data: Record<string, unknown>[];
}
export interface FilterCondition {
    field: string;
    value: unknown;
    operator: 'equals' | 'contains' | 'greater' | 'less';
}
export type CalculationType = 'sum' | 'avg' | 'max' | 'min' | 'count';
export type ChartType = 'bar' | 'line' | 'pie';
export interface ParsedRequest {
    type: 'query' | 'chart' | 'unknown';
    filters: FilterCondition[];
    calculation?: CalculationType;
    targetField?: string;
    chartType?: ChartType;
    dimensions?: string[];
    metrics?: string[];
    errorMessage?: string;
}
export interface CalculationResult {
    value: number | string;
    description: string;
    formula: string;
}
export interface ChartConfig {
    type: ChartType;
    title: string;
    sourceRange: string;
    categories: string[];
    values: number[];
    seriesName: string;
}
export interface ChartValidation {
    valid: boolean;
    message?: string;
}
export type AIProvider = 'local' | 'openai' | 'azure' | 'qwen';
export interface AIConfig {
    provider: AIProvider;
    apiKey: string;
    apiEndpoint?: string;
    model?: string;
}
export type MessageRole = 'user' | 'assistant' | 'error';
export interface ChatMessage {
    id: string;
    role: MessageRole;
    content: string;
    timestamp: Date;
    result?: CalculationResult;
}
export interface AIAnalysisResult {
    type: 'query' | 'chart' | 'unknown';
    queryResult?: {
        value: number | string;
        description: string;
        formula: string;
        filteredCount: number;
        totalCount: number;
    };
    chartResult?: {
        chartType: ChartType;
        title: string;
        categories: string[];
        values: number[];
        seriesName: string;
    };
    errorMessage?: string;
}
//# sourceMappingURL=types.d.ts.map