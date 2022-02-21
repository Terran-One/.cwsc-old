import {
  CWScriptParser,
  CwspecContext,
  IdentContext,
  InterfaceDefnContext,
  InterfaceItemContext,
  IdentListContext,
  SourceFileContext,
  InterfaceListContext,
  InterfaceValContext,
  ContractDefnContext,
  ImportSymbolContext,
  EnumVariant_structContext,
  StructMemberContext,
  EnumVariant_tupleContext,
  EnumVariant_unitContext,
  ErrorDefnContext,
  ContractBodyContext,
  EventDefnContext,
  ErrorDefnBlockContext,
  ErrorDefnBlock_itemContext,
  EventDefnBlockContext,
  StateItemDefnContext,
  StateMapDefnContext,
  MapDefnKeyContext,
  StateDefnBlockContext,
  StateBlockItemDefnContext,
} from './grammar/CWScriptParser';
import { CWScriptParserVisitor } from './grammar/CWScriptParserVisitor';
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

export class AST {}

export class CWSpec extends AST {
  constructor(public text: string) {
    super();
  }
}

export class Ident extends AST {
  constructor(public text: string) {
    super();
  }
}

export class List<T extends AST> extends AST {
  constructor(public elements: T[]) {
    super();
  }
}

export class SourceFile extends AST {
  constructor(public spec?: any, public stmts?: List<TopLevelStmt>) {
    super();
  }
}

type TopLevelStmt = InterfaceDefn | ContractDefn | ImportStmt;

export class InterfaceVal extends AST {
  constructor(public name: Ident, public mixins?: List<Ident>) {
    super();
  }
}

export class ImportStmt extends AST {
  constructor(
    public fileName: string,
    public symbols?: List<ImportSymbol>,
    public star?: boolean
  ) {
    super();
  }
}

export class GroupedImportSymbol extends List<ImportSymbol> {}
export class TypePathImportSymbol extends AST {
  constructor(public path: TypePath) {
    super();
  }
}
export class DestructureImportSymbol extends AST {
  constructor(public path: TypePath, public symbols: List<ImportSymbol>) {
    super();
  }
}
export class AllImportSymbol extends AST {
  constructor(public path: TypePath) {
    super();
  }
}
export class RenamedImportSymbol extends AST {
  constructor(public symbol: ImportSymbol, public name: Ident) {
    super();
  }
}

// TODO: change
type TypePath = any;

type ImportSymbol =
  | GroupedImportSymbol
  | TypePathImportSymbol
  | DestructureImportSymbol
  | AllImportSymbol
  | RenamedImportSymbol;

export class InterfaceDefn extends AST {
  constructor(
    public spec: CWSpec | undefined,
    public name: Ident,
    public body: any,
    public parents?: List<InterfaceVal>,
    public mixinName?: Ident
  ) {
    super();
  }
}

export class ContractDefn extends AST {
  constructor(
    public spec: CWSpec | undefined,
    public name: Ident,
    public body: List<ContractItem>,
    public parents?: List<Ident>,
    public interfaces?: List<InterfaceVal>
  ) {
    super();
  }
}

export type ContractItem = ErrorDefn;

export class ErrorDefn extends AST {
  constructor(
    public spec: CWSpec | undefined,
    public enumVariant: EnumVariant
  ) {
    super();
  }
}

export class EventDefn extends AST {
  constructor(
    public spec: CWSpec | undefined,
    public enumVariant: EnumVariant
  ) {
    super();
  }
}

export type StateDefn = ItemDefn | MapDefn;

export class ItemDefn extends AST {
  constructor(
    public spec: CWSpec | undefined,
    public key: Ident,
    public type: TypeExpr
  ) {
    super();
  }
}

export class MapDefn extends AST {
  constructor(
    public spec: CWSpec | undefined,
    public key: Ident,
    public mapKeys: List<MapDefnKey>,
    public type: List<TypeExpr>
  ) {
    super();
  }
}

export class MapDefnKey extends AST {
  constructor(public name: Ident, public type: TypeExpr) {
    super();
  }
}

type EnumVariant = EnumVariantStruct;

export class EnumVariantStruct extends AST {
  constructor(public name: Ident, public members: List<StructMember>) {
    super();
  }
}

export class EnumVariantTuple extends AST {
  constructor(public name: Ident, public members: List<TypeExpr>) {
    super();
  }
}

export class EnumVariantUnit extends AST {
  constructor(public name: Ident) {
    super();
  }
}

export class StructMember extends AST {
  constructor(
    public spec: CWSpec | undefined,
    public name: Ident,
    public option: boolean,
    public type: TypeExpr
  ) {
    super();
  }
}

// TODO: change
type TypeExpr = any;

export class CWScriptASTVisitor extends AbstractParseTreeVisitor<AST>
  implements CWScriptParserVisitor<AST> {
  protected defaultResult(): AST {
    return new AST();
  }

  visitSourceFile(ctx: SourceFileContext): SourceFile {
    return new SourceFile(
      ctx._spec,
      ctx.children?.map(child => this.visit(child)) as
        | List<TopLevelStmt>
        | undefined
    );
  }

  visitIdent(ctx: IdentContext): Ident {
    return new Ident(ctx.text);
  }

  visitIdentList(ctx: IdentListContext): List<Ident> {
    return new List(ctx._symbols.map(x => this.visitIdent(x)));
  }

  visitInterfaceList(ctx: InterfaceListContext): List<InterfaceVal> {
    return new List(ctx.interfaceVal().map(x => this.visitInterfaceVal(x)));
  }

  visitInterfaceVal(ctx: InterfaceValContext): InterfaceVal {
    return new InterfaceVal(
      this.visitIdent(ctx._interfaceName),
      ctx._mixins ? this.visitIdentList(ctx._mixins) : undefined
    );
  }

  visitCwspec(ctx: CwspecContext): CWSpec {
    return new CWSpec(ctx.text);
  }

  visitInterfaceDefn(ctx: InterfaceDefnContext): InterfaceDefn {
    return new InterfaceDefn(
      ctx._spec ? this.visitCwspec(ctx._spec) : undefined,
      this.visitIdent(ctx._name),
      this.visit(ctx.interfaceBody()),
      ctx._parents ? this.visitInterfaceList(ctx._parents) : undefined,
      ctx._mixinName ? this.visitIdent(ctx._mixinName) : undefined
    );
  }

  visitContractBody(ctx: ContractBodyContext): List<ContractItem> {
    let items = ctx.contractItem() || [];
    return new List(items.map(x => this.visit(x)) as ContractItem[]);
  }

  visitContractDefn(ctx: ContractDefnContext): ContractDefn {
    return new ContractDefn(
      ctx._spec ? this.visitCwspec(ctx._spec) : undefined,
      this.visitIdent(ctx._name),
      this.visitContractBody(ctx.contractBody()),
      ctx._parents ? this.visitIdentList(ctx._parents) : undefined,
      ctx._interfaces ? this.visitInterfaceList(ctx._interfaces) : undefined
    );
  }

  visitStructMember(ctx: StructMemberContext): StructMember {
    return new StructMember(
      ctx._spec ? this.visitCwspec(ctx._spec) : undefined,
      this.visitIdent(ctx._name),
      ctx._option ? true : false,
      this.visit(ctx._valueType) as TypeExpr
    );
  }

  visitEnumVariant_struct(ctx: EnumVariant_structContext): EnumVariantStruct {
    let parenStructMembers = ctx.parenStructMembers();
    let curlyStructMembers = ctx.curlyStructMembers();

    if (parenStructMembers !== undefined) {
      return new EnumVariantStruct(
        this.visitIdent(ctx._name),
        new List(
          parenStructMembers.structMember().map(x => this.visitStructMember(x))
        )
      );
    } else if (curlyStructMembers !== undefined) {
      return new EnumVariantStruct(
        this.visitIdent(ctx._name),
        new List(
          curlyStructMembers.structMember().map(x => this.visitStructMember(x))
        )
      );
    } else {
      throw new Error('unreachable');
    }
  }

  visitEnumVariant_tuple(ctx: EnumVariant_tupleContext): EnumVariantTuple {
    return new EnumVariantTuple(
      this.visitIdent(ctx._name),
      new List(
        ctx
          .tupleMembers()
          .typeExpr()
          .map(x => this.visit(x))
      )
    );
  }

  visitEnumVariant_unit(ctx: EnumVariant_unitContext): EnumVariantUnit {
    return new EnumVariantUnit(this.visitIdent(ctx._name));
  }

  visitErrorDefn(ctx: ErrorDefnContext): ErrorDefn {
    return new ErrorDefn(
      ctx._spec ? this.visitCwspec(ctx._spec) : undefined,
      this.visit(ctx.enumVariant()) as EnumVariant
    );
  }

  visitEventDefn(ctx: EventDefnContext): EventDefn {
    return new EventDefn(
      ctx._spec ? this.visitCwspec(ctx._spec) : undefined,
      this.visit(ctx.enumVariant()) as EnumVariant
    );
  }

  visitErrorDefnBlock(ctx: ErrorDefnBlockContext): List<ErrorDefn> {
    let defns = ctx.errorDefnBlock_item() || [];
    return new List(defns.map(x => this.visitErrorDefn(x as ErrorDefnContext)));
  }

  visitEventDefnBlock(ctx: EventDefnBlockContext): List<EventDefn> {
    let defns = ctx.eventDefnBlock_item() || [];
    return new List(defns.map(x => this.visitEventDefn(x as EventDefnContext)));
  }

  visitStateItemDefn(ctx: StateItemDefnContext): ItemDefn {
    let item = ctx._item;
    return new ItemDefn(
      ctx._spec ? this.visitCwspec(ctx._spec) : undefined,
      this.visitIdent(item._key),
      this.visit(item._valueType) as TypeExpr
    );
  }

  visitStateMapDefn(ctx: StateMapDefnContext): MapDefn {
    let map = ctx._map;
    let mapKeys = ctx._map._mapKeys.mapDefnKey() || [];
    return new MapDefn(
      ctx._spec ? this.visitCwspec(ctx._spec) : undefined,
      this.visitIdent(map._key),
      new List(mapKeys.map(x => this.visitMapDefnKey(x))),
      this.visit(map._valueType) as TypeExpr
    );
  }

  visitStateDefnBlock(ctx: StateDefnBlockContext): List<StateDefn> {
    let items = ctx.stateDefnBlock_item() || [];
    return new List(
      items.map(x => {
        if (x instanceof StateBlockItemDefnContext) {
          return this.visitStateItemDefn(x as StateItemDefnContext);
        } else {
          return this.visitStateMapDefn(x as StateMapDefnContext);
        }
      }) as StateDefn[]
    );
  }

  visitMapDefnKey(ctx: MapDefnKeyContext): MapDefnKey {
    return new MapDefnKey(
      this.visitIdent(ctx._keyName),
      this.visit(ctx._keyType) as TypeExpr
    );
  }
}
