import { AssetDTO } from '../../../../domain/dtos/Asset/Asset'
import { ResponseDTO } from '../../../../domain/dtos/Response'
import { AssetErrorType } from '../../../../domain/enums/asset/ErrorType'
import { AssetSuccessType } from '../../../../domain/enums/asset/SuccessType'
import { IAssetRepository } from '../../../repositories/Asset'
import { ICashFlowRepository } from '../../../repositories/CashFlow'
import { IDeleteAssetUseCase } from '../DeleteAsset'

/**
 * Use case for deleting asset.
 * @class
 * @implements {IDeleteAssetUseCase}
 */
export class DeleteAssetUseCase implements IDeleteAssetUseCase {
  /**
   * Creating an instance of DeleteAssetUseCase.
   * @constructor
   * @param {IAssetRepository} assetRepository - The repository for the assets data.
   * @param {ICashFlowRepository} cashFlowRepository - The repository for the cash flow statements data.
   */
  constructor(private assetRepository: IAssetRepository) {}

  /**
   * Executes the delete asset use case.
   * @async
   * @param {number} drawerId - The ID of the cash drawer to delete.
   * @param {string} assetType - The type of asset to delete.
   * @returns {Promise<ResponseDTO>} The response data.
   */
  async execute(assetId: number): Promise<ResponseDTO> {
    try {
      const assetExist = (await this.assetRepository.findById(
        assetId
      )) as AssetDTO | null

      if (!assetExist) {
        return {
          data: { error: AssetErrorType.AssetNotExist },
          success: false,
        }
      }

      await this.assetRepository.delete(assetId)

      return { data: { msg: AssetSuccessType.AssetDeleted }, success: true }
    } catch (error: any) {
      return { data: { error: error.message }, success: false }
    }
  }
}
