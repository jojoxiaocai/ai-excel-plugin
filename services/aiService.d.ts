/**
 * AI 服务
 * 支持多个 AI 提供商（OpenAI、Azure OpenAI、通义千问）
 * 按照 PRD 要求：核心依赖大模型能力，完成自然语言分析、数据分析、图表输出
 */
import { AIConfig, AIProvider, StructuredData, ParsedRequest, AIAnalysisResult, ChatMessage } from '../types/types';
/**
 * 保存配置
 */
export declare function saveConfig(config: AIConfig): void;
/**
 * 加载配置
 */
export declare function loadConfig(): void;
/**
 * 获取当前配置
 */
export declare function getConfig(): AIConfig;
/**
 * 检查 AI 是否可用
 */
export declare function isAIAvailable(): boolean;
/**
 * 【核心功能】使用 AI 完成完整的数据分析
 * 按照 PRD 要求：将框选数据 + 用户需求上传至大模型，由大模型完成分析、计算/图表逻辑处理
 */
export declare function analyzeWithAI(input: string, data: StructuredData, history?: ChatMessage[]): Promise<AIAnalysisResult>;
/**
 * 使用 AI 解析请求（保留兼容性，用于本地模式回退）
 */
export declare function parseWithAI(input: string, data: StructuredData): Promise<ParsedRequest>;
/**
 * 获取提供商显示名称
 */
export declare function getProviderDisplayName(provider: AIProvider): string;
import { ComputeInstruction } from './dataProcessor';
/**
 * AI 返回的计算指令结果
 */
export interface AIInstructionResult {
    type: 'instruction' | 'direct' | 'error';
    instructions?: ComputeInstruction[];
    directAnswer?: string;
    errorMessage?: string;
}
/**
 * 【v2.0 核心功能】多 Sheet 分析（指令模式）
 *
 * 优化策略：只发送数据预览（表头+2行样例），由 AI 返回计算指令，本地执行
 * Token 消耗：从 ~50,000 降低至 ~500（节省 99%）
 */
export declare function analyzeMultiSheetWithAI(input: string, sheetsData: Map<string, StructuredData>, history?: ChatMessage[]): Promise<AIInstructionResult>;
//# sourceMappingURL=aiService.d.ts.map