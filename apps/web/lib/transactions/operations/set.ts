import {BlockOperation, Block} from "@/lib/types";

export function set(block: any, blockId: string, workspaceId: string, path: string[] = []): BlockOperation {
    return {
        args: { ...block },
        path: path,
        command: "set",
        pointer: {
          id: blockId,
          table: "blocks",
          workspaceId: workspaceId,
        },
      };
}
