import { Injectable } from '@angular/core';

export interface DesignOption {
  value: string;
  label: string;
}

@Injectable({ providedIn: 'root' })
export class DesignOptionsService {
  readonly wallDesign: DesignOption[] = [
    { value: 'ceramic-tile',    label: 'Ceramic Tile' },
    { value: 'porcelain-tile',  label: 'Porcelain Tile' },
    { value: 'natural-stone',   label: 'Natural Stone' },
    { value: 'acrylic-panel',   label: 'Acrylic Panel' },
    { value: 'fiberglass-panel',label: 'Fiberglass Panel' },
    { value: 'others',          label: 'Others' },
  ];

  readonly tiles: DesignOption[] = [
    { value: 'ceramic',       label: 'Ceramic' },
    { value: 'porcelain',     label: 'Porcelain' },
    { value: 'natural-stone', label: 'Natural Stone (Marble, Travertine)' },
    { value: 'mosaic',        label: 'Mosaic' },
    { value: 'glass-tile',    label: 'Glass Tile' },
    { value: 'others',        label: 'Others' },
  ];

  readonly bath: DesignOption[] = [
    { value: 'freestanding',  label: 'Freestanding Tub' },
    { value: 'alcove',        label: 'Alcove Tub' },
    { value: 'drop-in',       label: 'Drop-in Tub' },
    { value: 'walk-in',       label: 'Walk-in Tub' },
    { value: 'shower-only',   label: 'Shower Only (No Tub)' },
    { value: 'others',        label: 'Others' },
  ];

  readonly sink: DesignOption[] = [
    { value: 'undermount',    label: 'Undermount' },
    { value: 'drop-in',       label: 'Drop-in / Top-mount' },
    { value: 'vessel',        label: 'Vessel Sink' },
    { value: 'pedestal',      label: 'Pedestal Sink' },
    { value: 'wall-mounted',  label: 'Wall-mounted' },
    { value: 'others',        label: 'Others' },
  ];

  readonly faucet: DesignOption[] = [
    { value: 'single-handle',       label: 'Single-handle' },
    { value: 'double-handle',       label: 'Double-handle' },
    { value: 'waterfall',           label: 'Waterfall' },
    { value: 'touchless',           label: 'Touchless' },
    { value: 'rainfall-showerhead', label: 'Rainfall Showerhead' },
    { value: 'others',              label: 'Others' },
  ];

  readonly shower: DesignOption[] = [
    { value: 'walk-in-shower',    label: 'Walk-in Shower' },
    { value: 'corner-shower',     label: 'Corner Shower' },
    { value: 'steam-shower',      label: 'Steam Shower' },
    { value: 'tub-shower-combo',  label: 'Tub-Shower Combo' },
    { value: 'others',            label: 'Others' },
  ];
}
