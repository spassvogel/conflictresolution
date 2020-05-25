export interface ISituations {
  [name: string]: ISituation
}
  
export interface ISituation {
  header: string;
  description: string;
  options: string[];
}

export enum ContentType {
  youtube = "youtube",
  options = "options",
  iframe = "iframe",
  conflict = "conflict",
}
  
export interface IContent<T extends YoutubeContent | OptionsContent | IframeContent | ConflictContent> {
  position: number[];
  type: ContentType;
  header: string;
  content: T;
}

export type AnyContent = IContent<YoutubeContent> | IContent<OptionsContent> | IContent<IframeContent> | IContent<ConflictContent>;

export interface YoutubeContent {
  url: string;
}

export interface IframeContent {
  url: string;
  height?: number | string;
}

export interface OptionsContent {
  description: string;
  bannerImg: string;
  options: string[];
  correctAnswers: number[];
}
export interface ConflictContent {
  description: string;
  sequence: SequenceItem[];
  scene: SceneElement[];
  situationSpeech: string;
  options: string[];
  reactions: ConflictReaction[];
}

export interface SceneElement {
  image?: string;
  type?: SceneElementType;
  position?: [number, number];
  scale?: number;
  flipped: boolean;
  pose: AvatarPose;
}

export enum SceneElementType {
  sprite = "sprite",
  avatar = "avatar",
}

export enum AvatarPose {
  angle = "angle",
  front = "front",
  side = "side",
  angry = "angry"
}

export interface ConflictReaction { 
  correct: boolean, 
  text: string, 
  scene: SceneElement[]; 
  confirmText: string, 
  confirmImage?: string 
}

export enum SequenceItemType {
  caption = 'caption',
  speech = 'speech'
}

export interface SequenceItem {
  type: SequenceItemType,
  text: string,
  balloonArrowPos?: number;
  
  scene?: SceneElement[]; // optional override
}