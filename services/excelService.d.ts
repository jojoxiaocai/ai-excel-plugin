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
//# sourceMappingURL=excelService.d.ts.map