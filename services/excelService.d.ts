/**
 * Excel 服务
 * 封装 Office JavaScript API 操作
 */
import { StructuredData } from '../types/types';
/**
 * 检查是否有有效选区
 */
export declare function hasSelection(): Promise<boolean>;
/**
 * 获取选中区域的结构化数据
 */
export declare function getSelectedData(): Promise<StructuredData>;
/**
 * 将结果写入单元格
 */
export declare function writeToCell(value: unknown, offset?: {
    row: number;
    col: number;
}): Promise<string>;
/**
 * 获取选区地址
 */
export declare function getSelectionAddress(): Promise<string>;
/**
 * 获取所有工作表名称
 */
export declare function getSheetNames(): Promise<string[]>;
/**
 * 从指定工作表获取数据
 * @param sheetName 工作表名称
 * @param rangeAddress 可选，指定范围如 "A1:D10"，默认为 UsedRange（已使用区域）
 */
export declare function getDataFromSheet(sheetName: string, rangeAddress?: string): Promise<StructuredData>;
/**
 * 获取所有工作表的数据
 * @returns Map，key 为 Sheet 名称，value 为该 Sheet 的结构化数据
 */
export declare function getAllSheetsData(): Promise<Map<string, StructuredData>>;
/**
 * 获取活动工作表名称
 */
export declare function getActiveSheetName(): Promise<string>;
//# sourceMappingURL=excelService.d.ts.map