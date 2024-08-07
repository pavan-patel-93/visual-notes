import {BlockOperation, Block} from "@/lib/types";

export function update(block: Partial<Block>, blockId: string, workspaceId: string): BlockOperation {
    return {
        args: { ...block },
        path: [],
        command: "update",
        pointer: {
          id: blockId,
          table: "blocks",
          workspaceId: workspaceId,
        },
      };
}